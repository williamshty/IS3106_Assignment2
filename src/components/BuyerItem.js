import React from "react";
import { connect } from "dva";
import { buyerGetAllItem, buyerSearchItem } from "../utils/webServices";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const ListTitle = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 22px;
`;

class BuyerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      quantity: 0,
      category: ""
    };
  }
  async buyerGetAllItemFunc() {
    const buyerGetAllItemResp = await buyerGetAllItem();
    console.log("buyerGetAllItem Status Code: " + buyerGetAllItemResp.status);
    console.log(
      "buyerGetAllItem Data: " + JSON.stringify(buyerGetAllItemResp.data)
    );
    this.props.dispatch({
      type: "buyerStore/save",
      payload: { itemList: buyerGetAllItemResp.data }
    });
  }

  async buyerSearchItemFunc(payload) {
    const buyerSearchItemResp = await buyerSearchItem(payload);
    console.log("buyerSearchItem Status Code: " + buyerSearchItemResp.status);
    console.log(
      "buyerSearchItem Data: " + JSON.stringify(buyerSearchItemResp.data)
    );
    this.props.dispatch({
      type: "buyerStore/save",
      payload: { itemList: buyerSearchItemResp.data }
    });
  }

  // buyerSearchItemFunc({
  //   type: "quantity",
  //   key: 100
  // });

  // buyerSearchItemFunc({
  //   type: "keyword",
  //   key: "o"
  // });

  // buyerSearchItemFunc({
  //   type: "category",
  //   key: "this"
  // });

  componentDidMount() {
    this.buyerGetAllItemFunc(this.props.buyerStore.buyerID);
  }
  componentWillUnmount() {}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <ListTitle>Buyer Item List</ListTitle>
        <Grid container direction="column">
          <Grid item>
            <Grid container>
              <TextField
                id="outlined-name"
                label="Keyword"
                value={this.state.keyword}
                onChange={this.handleChange("keyword")}
                margin="normal"
                variant="outlined"
              />
              <Button
                color="primary"
                onClick={() => {
                  this.buyerSearchItemFunc({
                    type: "keyword",
                    key: this.state.keyword
                  });
                  this.setState({ keyword: "", quantity: 0, category: "" });
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <TextField
                id="outlined-name"
                label="Category"
                value={this.state.category}
                onChange={this.handleChange("category")}
                margin="normal"
                variant="outlined"
              />
              <Button
                color="primary"
                onClick={() => {
                  this.buyerSearchItemFunc({
                    type: "category",
                    key: this.state.category
                  });
                  this.setState({ keyword: "", quantity: 0, category: "" });
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <TextField
                id="outlined-name"
                label="Availability"
                value={this.state.quantity}
                onChange={this.handleChange("quantity")}
                margin="normal"
                variant="outlined"
              />
              <Button
                color="primary"
                onClick={() => {
                  this.buyerSearchItemFunc({
                    type: "quantity",
                    key: this.state.quantity
                  });
                  this.setState({ keyword: "", quantity: 0, category: "" });
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Add to Cart</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.buyerStore.itemList.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          const currentCart = this.props.buyerStore.cart;
                          currentCart.push(row);
                          this.props.dispatch({
                            type: "buyerStore/save",
                            payload: { cart: currentCart }
                          });
                        }}
                      >
                        Add
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

BuyerItem.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerItem);
