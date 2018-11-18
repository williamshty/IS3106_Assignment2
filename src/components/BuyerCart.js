import React from "react";
import { connect } from "dva";
import { buyerCreateOrder } from "../utils/webServices";
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

class BuyerCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      quantity: 0,
      category: ""
    };
  }
  async buyerCreateOrderFunc(payload) {
    const buyerCreateOrderResp = await buyerCreateOrder(payload);
    console.log("buyerCreateOrder Status Code: " + buyerCreateOrderResp.status);
    console.log(
      "buyerCreateOrder Data: " + JSON.stringify(buyerCreateOrderResp.data)
    );
  }

  // buyerCreateOrderFunc({
  //   itemID: 552,
  //   sellerID: 201,
  //   buyerID: 101
  // });

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <ListTitle>Buyer Cart</ListTitle>

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
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.buyerStore.cart.map(row => {
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
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <div style={{ paddingTop: 22 }}>
          <Grid container justify="space-around" alignItems="center">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                this.props.dispatch({
                  type: "buyerStore/save",
                  payload: {
                    cart: []
                  }
                });
              }}
            >
              Clear Cart
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                for (let i = 0; i < this.props.buyerStore.cart.length; i++) {
                  this.buyerCreateOrderFunc({
                    itemID: this.props.buyerStore.cart[i].id,
                    sellerID: this.props.buyerStore.cart[i].seller.id,
                    buyerID: this.props.buyerStore.buyerID
                  });
                  console.log(JSON.stringify(this.props.buyerStore.cart[i]));
                }
                this.props.dispatch({
                  type: "buyerStore/save",
                  payload: {
                    cart: []
                  }
                });
                this.props.dispatch({ type: "navigator/clearBuyer" });
                this.props.dispatch({
                  type: "navigator/save",
                  payload: { buyerCheckoutShow: true }
                });
              }}
            >
              Checkout
            </Button>
          </Grid>
        </div>
      </div>
    );
  }
}

BuyerCart.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerCart);
