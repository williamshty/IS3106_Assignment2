import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import { adminLogin, sellerLogin, buyerLogin } from "../utils/webServices";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { routerRedux } from "dva/router";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const LoginContainer = styled.div`
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
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false
    };
  }
  async adminLoginFunc(payload) {
    const adminLoginResp = await adminLogin(payload);
    if (adminLoginResp.status < 400) {
      this.props.dispatch(routerRedux.push({ pathname: "/admin" }));
    } else {
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          infoBarMessage:
            "Admin Login Failed, Username or password may be incorrect"
        }
      });
    }
    console.log("adminLogin Data: " + JSON.stringify(adminLoginResp.data));
  }
  async sellerLoginFunc(payload) {
    const sellerLoginResp = await sellerLogin(payload);
    if (sellerLoginResp.status < 400) {
      this.props.dispatch({
        type: "sellerStore/save",
        payload: {
          sellerEntity: sellerLoginResp.data,
          sellerID: sellerLoginResp.data.id
        }
      });
      this.props.dispatch(routerRedux.push({ pathname: "/seller" }));
    } else {
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          infoBarMessage:
            "Seller Login Failed, Password or Username may be incorrect or you may have been deactivated"
        }
      });
    }
    console.log("sellerLogin Data: " + JSON.stringify(sellerLoginResp.data));
  }
  async buyerLoginFunc(payload) {
    const buyerLoginResp = await buyerLogin(payload);
    if (buyerLoginResp.status < 400) {
      this.props.dispatch({
        type: "buyerStore/save",
        payload: {
          buyerEntity: buyerLoginResp.data,
          buyerID: buyerLoginResp.data.id
        }
      });
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          login: true
        }
      });
      this.props.dispatch({
        type: "buyerStore/recoverCart"
      });
      this.props.dispatch(routerRedux.push({ pathname: "/buyer" }));
    } else {
      this.props.dispatch({
        type: "navigator/save",
        payload: {
          infoBarMessage:
            "Buyer Login Failed, Password or Username may be incorrect or you may have been deactivated"
        }
      });
    }
    console.log("buyerLogin Data: " + JSON.stringify(buyerLoginResp.data));
  }

  handleLoginSubmission(payload) {
    switch (this.props.navigator.userType) {
      case "admin":
        this.adminLoginFunc(payload);
        break;
      case "seller":
        this.sellerLoginFunc(payload);
        break;
      case "buyer":
        this.buyerLoginFunc(payload);
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
      <LoginContainer>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <FormTitle>
            {this.props.navigator.userType.toUpperCase()} Login
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
              this.handleLoginSubmission({
                username: this.state.username,
                password: this.state.password
              })
            }
          >
            Submit
          </SubmitButton>
          <RegistrationButton
            onClick={() => {
              this.props.dispatch({
                type: "navigator/save",
                payload: {
                  loginShow: false,
                  registrationShow: true
                }
              });
            }}
          >
            No account? Register
          </RegistrationButton>
          {this.props.navigator.userType === "buyer" && (
            <RegistrationButton
              onClick={() => {
                this.props.dispatch(routerRedux.push({ pathname: "/buyer" }));
              }}
            >
              Continue As a Guest
            </RegistrationButton>
          )}
        </Grid>
      </LoginContainer>
    );
  }
}

LoginForm.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LoginForm);
