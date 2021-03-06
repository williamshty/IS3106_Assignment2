import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import { buyerEditOrder } from "../utils/webServices";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { routerRedux } from "dva/router";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const EditOrderContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  position: absolute;
  background-color: #ffa801;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 0 44px;
  box-sizing: border-box;
`;

const FormTitleEdit = styled.div`
  padding: 22px;
  color: #fff;
  font-size: 24px;
  text-align: center;
`;

const SubmitButtonEdit = withStyles({
  root: {
    backgroundColor: "#FFF",
    color: "#000",
    width: "100%",
    height: 22,
    fontSize: 16,
    marginTop: 44
  }
})(Button);

const RegistrationButton = withStyles({
  root: {
    // backgroundColor: "#FFF",
    color: "#000",
    marginTop: 44,
    width: "80%",
    height: 44,
    fontSize: 14
  }
})(Button);

const CustomTextInput = withStyles({
  root: {
    marginBottom: 11
  }
})(TextField);
class BuyerCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
  }

  async buyerEditOrderFunc(payload) {
    const buyerEditOrderResp = await buyerEditOrder(payload);
    console.log("buyerEditOrder Status Code: " + buyerEditOrderResp.status);
    console.log(
      "buyerEditOrder Data: " + JSON.stringify(buyerEditOrderResp.data)
    );
    if (buyerEditOrderResp.status < 400) {
      this.props.dispatch({
        type: "buyerStore/save",
        payload: {
          currentOrder: {
            id: 0,
            itemId: 0,
            rating: "",
            review: "",
            status: ""
          }
        }
      });
      this.props.dispatch({
        type: "navigator/clearBuyer"
      });
      this.props.dispatch({
        type: "navigator/save",
        payload: { buyerOrderShow: true }
      });
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <EditOrderContainer>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignOrders="center"
        >
          <FormTitleEdit>Checkout Cart</FormTitleEdit>
          <CustomTextInput
            fullWidth
            id="outlined-rating"
            label="Card Number"
            margin="normal"
            variant="outlined"
          />

          <CustomTextInput
            id="filled-select-currency-native"
            type="month"
            label="Expiry Month"
            SelectProps={{
              native: true
            }}
            margin="normal"
            variant="filled"
          />
          <CustomTextInput
            fullWidth
            id="outlined-review"
            label="CVV/2"
            type="password"
            margin="normal"
            variant="outlined"
          />

          <SubmitButtonEdit
            onClick={() => {
              this.props.dispatch({ type: "navigator/clearBuyer" });
              this.props.dispatch({
                type: "navigator/save",
                payload: { buyerOrderShow: true }
              });
            }}
          >
            Confirm
          </SubmitButtonEdit>
        </Grid>
      </EditOrderContainer>
    );
  }
}

BuyerCheckout.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerCheckout);
