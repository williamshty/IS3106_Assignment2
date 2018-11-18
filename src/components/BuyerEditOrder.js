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
  height: 400px;
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
class BuyerEditOrder extends React.Component {
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
    } else {
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          infoBarMessage: "Order Edit Failed"
        }
      });
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <EditOrderContainer>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignOrders="center"
        >
          <FormTitleEdit>
            Edit Order ID: {this.props.buyerStore.currentOrder.id}
          </FormTitleEdit>
          <CustomTextInput
            fullWidth
            id="outlined-rating"
            label="Rating"
            value={this.props.buyerStore.currentOrder.rating}
            onChange={e => {
              this.props.dispatch({
                type: "buyerStore/save",
                payload: {
                  currentOrder: {
                    ...this.props.buyerStore.currentOrder,
                    ...{ rating: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />
          <CustomTextInput
            fullWidth
            id="outlined-review"
            label="Review"
            value={this.props.buyerStore.currentOrder.review}
            onChange={e => {
              this.props.dispatch({
                type: "buyerStore/save",
                payload: {
                  currentOrder: {
                    ...this.props.buyerStore.currentOrder,
                    ...{ review: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />

          <SubmitButtonEdit
            onClick={() =>
              this.buyerEditOrderFunc({
                orderID: this.props.buyerStore.currentOrder.id,
                rating: this.props.buyerStore.currentOrder.rating,
                review: this.props.buyerStore.currentOrder.review
              })
            }
          >
            Update
          </SubmitButtonEdit>
        </Grid>
      </EditOrderContainer>
    );
  }
}

BuyerEditOrder.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerEditOrder);
