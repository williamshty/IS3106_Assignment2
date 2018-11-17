import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import { sellerRegister, buyerRegister } from "../utils/webServices";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { routerRedux } from "dva/router";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const RegistrationContainer = styled.div`
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
    height: 44,
    fontSize: 20
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
    marginBottom: 44
  }
})(TextField);
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
  }

  async sellerRegisterFunc(payload) {
    const sellerRegisterResp = await sellerRegister(payload);
    if (sellerRegisterResp.status < 400) {
      this.props.dispatch({
        type: "sellerStore/save",
        payload: {
          sellerEntity: sellerRegisterResp.data,
          sellerID: sellerRegisterResp.data.id
        }
      });
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          loginShow: true,
          registrationShow: false
        }
      });
    }
    console.log(
      "sellerRegister Data: " + JSON.stringify(sellerRegisterResp.data)
    );
  }
  async buyerRegisterFunc(payload) {
    const buyerRegisterResp = await buyerRegister(payload);
    if (buyerRegisterResp.status < 400) {
      this.props.dispatch({
        type: "buyerStore/save",
        payload: {
          buyerEntity: buyerRegisterResp.data,
          buyerID: buyerRegisterResp.data.id
        }
      });
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          loginShow: true,
          registrationShow: false
        }
      });
    }
    console.log(
      "buyerRegister Data: " + JSON.stringify(buyerRegisterResp.data)
    );
  }

  handleRegistrationSubmission(payload) {
    switch (this.props.navigator.userType) {
      case "seller":
        this.sellerRegisterFunc(payload);
        break;
      case "buyer":
        this.buyerRegisterFunc(payload);
        break;
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  render() {
    return (
      // <RegistrationContainer>
      // <Grid
      //   container
      //   direction="column"
      //   justify="space-around"
      //   alignItems="center"
      // >

      //   </Grid>
      // </RegistrationContainer>
      <RegistrationContainer>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <FormTitle>
            {this.props.navigator.userType.toUpperCase()} Registration
          </FormTitle>
          <CustomTextInput
            fullWidth
            id="outlined-name"
            label="Name"
            value={this.state.username}
            onChange={this.handleChange("username")}
            margin="normal"
            variant="outlined"
          />
          <CustomTextInput
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
          <SubmitButton
            onClick={() =>
              this.handleRegistrationSubmission({
                username: this.state.username,
                password: this.state.password
              })
            }
          >
            Register
          </SubmitButton>
          <RegistrationButton
            onClick={() => {
              this.props.dispatch({
                type: "navigator/save",
                payload: {
                  loginShow: true,
                  registrationShow: false
                }
              });
            }}
          >
            Have an account? Login
          </RegistrationButton>
        </Grid>
      </RegistrationContainer>
    );
  }
}

RegistrationForm.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(RegistrationForm);
