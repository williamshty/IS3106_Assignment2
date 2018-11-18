import React from "react";
import { connect } from "dva";
import {
  sellerGetAllOrder,
  sellerUpdateOrderStatus
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

class SellerOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  async sellerGetAllOrderFunc(sellerID) {
    const sellerGetAllOrderResp = await sellerGetAllOrder(sellerID);
    console.log(
      "sellerGetAllOrder Status Code: " + sellerGetAllOrderResp.status
    );
    console.log(
      "sellerGetAllOrder Data: " + JSON.stringify(sellerGetAllOrderResp.data)
    );
    this.props.dispatch({
      type: "sellerStore/save",
      payload: { itemList: sellerGetAllOrderResp.data }
    });
  }

  async sellerUpdateOrderStatusFunc(payload) {
    const sellerUpdateOrderStatusResp = await sellerUpdateOrderStatus(payload);
    console.log(
      "sellerUpdateOrderStatus Status Code: " +
        sellerUpdateOrderStatusResp.status
    );
    console.log(
      "sellerUpdateOrderStatus Data: " +
        JSON.stringify(sellerUpdateOrderStatusResp.data)
    );
    if (sellerUpdateOrderStatusResp.status < 400) {
      this.sellerGetAllOrderFunc(this.props.sellerStore.sellerID);
    } else {
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          infoBarMessage: "Update Order Status Failed"
        }
      });
    }
  }

  // sellerUpdateOrderStatusFunc({
  //   orderID: 260,
  //   newStatus: "STYSTYHELLO"
  // });

  // sellerGetAllOrderFunc(201);

  componentDidMount() {
    this.sellerGetAllOrderFunc(this.props.sellerStore.sellerID);
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
        <ListTitle>Seller Order List</ListTitle>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Item ID</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Review</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.sellerStore.itemList.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.itemId}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.review}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <TextField
                        id="filled-select-currency-native"
                        select
                        label="New Status"
                        // value={this.state.currency}
                        onChange={e => {
                          this.sellerUpdateOrderStatusFunc({
                            orderID: row.id,
                            newStatus: e.target.value
                          });
                        }}
                        SelectProps={{
                          native: true
                        }}
                        margin="normal"
                        variant="filled"
                      >
                        {[
                          "",
                          "payment confirmed",
                          "cancelled",
                          "shipped",
                          "delivered"
                        ].map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </TextField>
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

SellerOrder.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerOrder);
