import React from "react";
import { connect } from "dva";
import { buyerGetAllOrder } from "../utils/webServices";
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

class BuyerOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  async buyerGetAllOrderFunc(buyerID) {
    const buyerGetAllOrderResp = await buyerGetAllOrder(buyerID);
    console.log("buyerGetAllOrder Status Code: " + buyerGetAllOrderResp.status);
    console.log(
      "buyerGetAllOrder Data: " + JSON.stringify(buyerGetAllOrderResp.data)
    );
    this.props.dispatch({
      type: "buyerStore/save",
      payload: { itemList: buyerGetAllOrderResp.data }
    });
  }

  componentDidMount() {
    this.buyerGetAllOrderFunc(this.props.buyerStore.buyerID);
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
        <ListTitle>Buyer Order List</ListTitle>

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
              {this.props.buyerStore.itemList.map(row => {
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          this.props.dispatch({
                            type: "buyerStore/save",
                            payload: { currentOrder: row }
                          });
                          this.props.dispatch({
                            type: "navigator/clearBuyer"
                          });
                          this.props.dispatch({
                            type: "navigator/save",
                            payload: { buyerEditOrderShow: true }
                          });
                        }}
                      >
                        Edit
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

BuyerOrder.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerOrder);
