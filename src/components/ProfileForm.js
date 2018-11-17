import React, { Fragment } from "react";
import { connect } from "dva";
import styled from "styled-components";
import { sellerUpdateProfile, buyerUpdateProfile } from "../utils/webServices";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { routerRedux } from "dva/router";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const AddItemContainer = styled.div`
  width: 500px;
  height: 450px;
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

const CustomTextInput = withStyles({
  root: {
    marginBottom: 44
  }
})(TextField);
class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async buyerUpdateProfileFunc(payload) {
    const buyerUpdateProfileResp = await buyerUpdateProfile(payload);
    console.log(
      "buyerUpdateProfile Status Code: " + buyerUpdateProfileResp.status
    );
    console.log(
      "buyerUpdateProfile Data: " + JSON.stringify(buyerUpdateProfileResp.data)
    );
  }

  // buyerUpdateProfileFunc({
  //   buyerID: 101,
  //   buyerName: "STYSTYHELLO",
  //   buyerGender: 1
  // });
  async sellerUpdateProfileFunc(payload) {
    const sellerUpdateProfileResp = await sellerUpdateProfile(payload);
    console.log(
      "sellerUpdateProfile Status Code: " + sellerUpdateProfileResp.status
    );
    console.log(
      "sellerUpdateProfile Data: " +
        JSON.stringify(sellerUpdateProfileResp.data)
    );
  }

  // sellerUpdateProfileFunc({
  //   sellerID: 201,
  //   sellerName: "STYSTYHELLO",
  //   sellerGender: 1
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
      <AddItemContainer>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <FormTitle>
            Edit {this.props.navigator.userType.toUpperCase()} Profile
          </FormTitle>
          {this.props.navigator.userType === "seller" && (
            <Fragment>
              <CustomTextInput
                fullWidth
                id="outlined-name"
                label="Name"
                value={this.props.sellerStore.sellerEntity.name}
                onChange={e => {
                  this.props.dispatch({
                    type: "sellerStore/save",
                    payload: {
                      sellerEntity: {
                        ...this.props.sellerStore.sellerEntity,
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
                id="filled-select-currency-native"
                select
                label="Gender"
                value={this.props.sellerStore.sellerEntity.gender}
                onChange={e => {
                  this.props.dispatch({
                    type: "sellerStore/save",
                    payload: {
                      sellerEntity: {
                        ...this.props.sellerStore.sellerEntity,
                        ...{ gender: e.target.value }
                      }
                    }
                  });
                }}
                SelectProps={{
                  native: true
                }}
                margin="normal"
                variant="filled"
              >
                {[
                  { label: "male", value: 1 },
                  { label: "female", value: 0 }
                ].map(option => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CustomTextInput>

              <SubmitButton
                onClick={() =>
                  this.sellerUpdateProfileFunc({
                    sellerID: this.props.sellerStore.sellerID,
                    sellerName: this.props.sellerStore.sellerEntity.name,
                    sellerGender: this.props.sellerStore.sellerEntity.gender
                  })
                }
              >
                Update
              </SubmitButton>
            </Fragment>
          )}
          {this.props.navigator.userType === "buyer" && (
            <Fragment>
              <CustomTextInput
                fullWidth
                id="outlined-name"
                label="Name"
                value={this.props.buyerStore.buyerEntity.name}
                onChange={e => {
                  this.props.dispatch({
                    type: "buyerStore/save",
                    payload: {
                      buyerEntity: {
                        ...this.props.buyerStore.buyerEntity,
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
                id="filled-select-currency-native"
                select
                label="Gender"
                value={this.props.buyerStore.buyerEntity.gender}
                onChange={e => {
                  this.props.dispatch({
                    type: "buyerStore/save",
                    payload: {
                      buyerEntity: {
                        ...this.props.buyerStore.buyerEntity,
                        ...{ gender: e.target.value }
                      }
                    }
                  });
                }}
                SelectProps={{
                  native: true
                }}
                margin="normal"
                variant="filled"
              >
                {[
                  { label: "male", value: 1 },
                  { label: "female", value: 0 }
                ].map(option => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CustomTextInput>

              <SubmitButton
                onClick={() =>
                  this.buyerUpdateProfileFunc({
                    buyerID: this.props.buyerStore.buyerID,
                    buyerName: this.props.buyerStore.buyerEntity.name,
                    buyerGender: this.props.buyerStore.buyerEntity.gender
                  })
                }
              >
                Update
              </SubmitButton>
            </Fragment>
          )}
        </Grid>
      </AddItemContainer>
    );
  }
}

ProfileForm.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProfileForm);
