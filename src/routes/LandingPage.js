import React from "react";
import { connect } from "dva";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import { routerRedux } from "dva/router";

const LandingLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;
const LandingContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom right, #ffbc3b 0%, #ffa632 100%);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const NavigationButton = withStyles({
  root: {
    backgroundColor: "#FFF",
    color: "#000",
    width: "80%",
    height: 66,
    fontSize: 32
  }
})(Button);
class LandingPage extends React.Component {
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
      <LandingLayout>
        <LandingContainer>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <NavigationButton
              onClick={() => {
                this.props.dispatch({
                  type: "navigator/save",
                  payload: {
                    userType: "admin",
                    loginShow: true
                  }
                });
                this.props.dispatch(routerRedux.push({ pathname: "/auth" }));
              }}
            >
              ADMIN
            </NavigationButton>
            <NavigationButton
              onClick={() => {
                this.props.dispatch({
                  type: "navigator/save",
                  payload: {
                    userType: "seller",
                    loginShow: true
                  }
                });
                this.props.dispatch(routerRedux.push({ pathname: "/auth" }));
              }}
            >
              SELLER
            </NavigationButton>
            <NavigationButton
              onClick={() => {
                this.props.dispatch({
                  type: "navigator/save",
                  payload: {
                    userType: "buyer",
                    loginShow: true
                  }
                });
                this.props.dispatch(routerRedux.push({ pathname: "/auth" }));
              }}
            >
              BUYER
            </NavigationButton>
          </Grid>
        </LandingContainer>
      </LandingLayout>
    );
  }
}

LandingPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LandingPage);
