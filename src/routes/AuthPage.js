import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const AuthLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;
class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <AuthLayout>
        {this.props.navigator.loginShow && <LoginForm />}
        {this.props.navigator.registrationShow && <RegistrationForm />}
      </AuthLayout>
    );
  }
}

AuthPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AuthPage);
