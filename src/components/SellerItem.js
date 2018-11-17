import React from "react";
import { connect } from "dva";
import {
  sellerGetAllItem,
  sellerSearchItemByKey,
  sellerDeleteItem
} from "../utils/webServices";
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

class SellerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  async sellerGetAllItemFunc(sellerID) {
    const sellerGetAllItemResp = await sellerGetAllItem(sellerID);
    console.log("sellerGetAllItem Status Code: " + sellerGetAllItemResp.status);
    console.log(
      "sellerGetAllItem Data: " + JSON.stringify(sellerGetAllItemResp.data)
    );
    this.props.dispatch({
      type: "sellerStore/save",
      payload: { itemList: sellerGetAllItemResp.data }
    });
  }

  async sellerSearchItemByKeyFunc(payload) {
    const sellerSearchItemByKeyResp = await sellerSearchItemByKey(payload);
    console.log(
      "sellerSearchItemByKey Status Code: " + sellerSearchItemByKeyResp.status
    );
    console.log(
      "sellerSearchItemByKey Data: " +
        JSON.stringify(sellerSearchItemByKeyResp.data)
    );
    this.props.dispatch({
      type: "sellerStore/save",
      payload: { itemList: sellerSearchItemByKeyResp.data }
    });
  }

  async sellerDeleteItemFunc(itemID) {
    const sellerDeleteItemResp = await sellerDeleteItem(itemID);
    console.log("sellerDeleteItem Status Code: " + sellerDeleteItemResp.status);
    console.log(
      "sellerDeleteItem Data: " + JSON.stringify(sellerDeleteItemResp.data)
    );
    if (sellerDeleteItemResp.status < 400) {
      this.sellerGetAllItemFunc(this.props.sellerStore.sellerID);
    }
  }
  componentDidMount() {
    this.sellerGetAllItemFunc(this.props.sellerStore.sellerID);
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
        <ListTitle>Seller Item List</ListTitle>
        <Grid container>
          <TextField
            id="outlined-name"
            label="Name"
            value={this.state.keyword}
            onChange={this.handleChange("keyword")}
            margin="normal"
            variant="outlined"
          />
          <Button
            color="primary"
            onClick={() => {
              this.sellerSearchItemByKeyFunc({
                sellerID: this.props.sellerStore.sellerID,
                keyword: this.state.keyword
              });
            }}
          >
            Search
          </Button>
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
                <TableCell>Action</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.sellerStore.itemList.map(row => {
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
                          this.props.dispatch({
                            type: "sellerStore/save",
                            payload: { currentItem: row }
                          });
                          this.props.dispatch({
                            type: "navigator/clearSeller"
                          });
                          this.props.dispatch({
                            type: "navigator/save",
                            payload: { sellerEditItemShow: true }
                          });
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          this.sellerDeleteItemFunc(row.id);
                        }}
                      >
                        Delete
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

SellerItem.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerItem);
