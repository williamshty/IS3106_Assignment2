import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import { sellerEditItem } from "../utils/webServices";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { routerRedux } from "dva/router";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const EditItemContainer = styled.div`
  width: 500px;
  height: 540px;
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

const FormTitle = styled.div`
  padding: 22px;
  color: #fff;
  font-size: 24px;
`;

const SubmitButton = withStyles({
  root: {
    backgroundColor: "#FFF",
    color: "#000",
    width: "80%",
    height: 22,
    fontSize: 16
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
class SellerEditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
  }

  async sellerEditItemFunc(payload) {
    const sellerEditItemResp = await sellerEditItem(payload);
    console.log("sellerEditItem Status Code: " + sellerEditItemResp.status);
    console.log(
      "sellerEditItem Data: " + JSON.stringify(sellerEditItemResp.data)
    );
    if (sellerEditItemResp.status < 400) {
      this.props.dispatch({
        type: "sellerStore/save",
        payload: {
          currentItem: {
            id: "",
            name: "",
            description: "",
            category: "",
            price: 0,
            quantity: 0
          }
        }
      });
      this.props.dispatch({
        type: "navigator/clearSeller"
      });
      this.props.dispatch({
        type: "navigator/save",
        payload: { sellerItemShow: true }
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
      <EditItemContainer>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <FormTitle>
            Edit Item ID: {this.props.sellerStore.currentItem.id}
          </FormTitle>
          <CustomTextInput
            fullWidth
            id="outlined-name"
            label="Name"
            value={this.props.sellerStore.currentItem.name}
            onChange={e => {
              this.props.dispatch({
                type: "sellerStore/save",
                payload: {
                  currentItem: {
                    ...this.props.sellerStore.currentItem,
                    ...{ name: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />
          <CustomTextInput
            fullWidth
            id="outlined-name"
            label="Description"
            value={this.props.sellerStore.currentItem.description}
            onChange={e => {
              this.props.dispatch({
                type: "sellerStore/save",
                payload: {
                  currentItem: {
                    ...this.props.sellerStore.currentItem,
                    ...{ description: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />
          <CustomTextInput
            fullWidth
            id="outlined-name"
            label="Category"
            value={this.props.sellerStore.currentItem.category}
            onChange={e => {
              this.props.dispatch({
                type: "sellerStore/save",
                payload: {
                  currentItem: {
                    ...this.props.sellerStore.currentItem,
                    ...{ category: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />
          <CustomTextInput
            fullWidth
            id="outlined-name"
            label="Price"
            value={this.props.sellerStore.currentItem.price}
            onChange={e => {
              this.props.dispatch({
                type: "sellerStore/save",
                payload: {
                  currentItem: {
                    ...this.props.sellerStore.currentItem,
                    ...{ price: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />
          <CustomTextInput
            fullWidth
            id="outlined-name"
            label="Quantity"
            value={this.props.sellerStore.currentItem.quantity}
            onChange={e => {
              this.props.dispatch({
                type: "sellerStore/save",
                payload: {
                  currentItem: {
                    ...this.props.sellerStore.currentItem,
                    ...{ quantity: e.target.value }
                  }
                }
              });
            }}
            margin="normal"
            variant="outlined"
          />
          <SubmitButton
            onClick={() =>
              this.sellerEditItemFunc(this.props.sellerStore.currentItem)
            }
          >
            Update
          </SubmitButton>
        </Grid>
      </EditItemContainer>
    );
  }
}

SellerEditItem.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerEditItem);
