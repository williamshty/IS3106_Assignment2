import React from "react";
import { connect } from "dva";
import {
  getAllBuyer,
  getAllSeller,
  activateBuyer,
  deactivateBuyer,
  activateSeller,
  deactivateSeller
} from "../utils/webServices";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const ListTitle = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 22px;
`;

class AdminUserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  async getAllBuyerFunc() {
    const getAllBuyerResp = await getAllBuyer();
    console.log("getAllBuyer Status Code: " + getAllBuyerResp.status);
    console.log("getAllBuyer Data: " + JSON.stringify(getAllBuyerResp.data));
    this.props.dispatch({
      type: "adminStore/save",
      payload: { buyerList: getAllBuyerResp.data }
    });
  }

  // getAllBuyerFunc();

  async getAllSellerFunc() {
    const getAllSellerResp = await getAllSeller();
    console.log("getAllSeller Status Code: " + getAllSellerResp.status);
    console.log("getAllSeller Data: " + JSON.stringify(getAllSellerResp.data));
    this.props.dispatch({
      type: "adminStore/save",
      payload: { sellerList: getAllSellerResp.data }
    });
  }

  async activateBuyerFunc(id) {
    const activateBuyerResp = await activateBuyer(id);
    console.log("activateBuyer Status Code: " + activateBuyerResp.status);
    console.log(
      "activateBuyer Data: " + JSON.stringify(activateBuyerResp.data)
    );
    this.getAllBuyerFunc();
  }

  // activateBuyerFunc(101);

  async deactivateBuyerFunc(id) {
    const deactivateBuyerResp = await deactivateBuyer(id);
    console.log("deactivateBuyer Status Code: " + deactivateBuyerResp.status);
    console.log(
      "deactivateBuyer Data: " + JSON.stringify(deactivateBuyerResp.data)
    );
    this.getAllBuyerFunc();
  }

  // deactivateBuyerFunc(101);

  async activateSellerFunc(id) {
    const activateSellerResp = await activateSeller(id);
    console.log("activateSeller Status Code: " + activateSellerResp.status);
    console.log(
      "activateSeller Data: " + JSON.stringify(activateSellerResp.data)
    );
    this.getAllSellerFunc();
  }

  // activateSellerFunc(201);

  async deactivateSellerFunc(id) {
    const deactivateSellerResp = await deactivateSeller(id);
    console.log("deactivateSeller Status Code: " + deactivateSellerResp.status);
    console.log(
      "deactivateSeller Data: " + JSON.stringify(deactivateSellerResp.data)
    );
    this.getAllSellerFunc();
  }
  componentDidMount() {
    this.getAllBuyerFunc();
    this.getAllSellerFunc();
  }
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <ListTitle>Seller</ListTitle>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.adminStore.sellerList.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>
                      {row.status ? "active" : "deactivated"}
                    </TableCell>
                    <TableCell>
                      {row.status ? (
                        <Button
                          color="secondary"
                          variant="contained"
                          onClick={() => {
                            this.deactivateSellerFunc(row.id);
                          }}
                        >
                          Deactivate
                        </Button>
                      ) : (
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => {
                            this.activateSellerFunc(row.id);
                          }}
                        >
                          Activate
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <ListTitle>Buyer</ListTitle>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.adminStore.buyerList.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>
                      {row.status ? "active" : "deactivated"}
                    </TableCell>
                    <TableCell>
                      {row.status ? (
                        <Button
                          color="secondary"
                          variant="contained"
                          onClick={() => {
                            this.deactivateBuyerFunc(row.id);
                          }}
                        >
                          Deactivate
                        </Button>
                      ) : (
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={() => {
                            this.activateBuyerFunc(row.id);
                          }}
                        >
                          Activate
                        </Button>
                      )}
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

AdminUserTable.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AdminUserTable);
