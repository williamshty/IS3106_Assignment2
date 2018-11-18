import React, { Fragment } from "react";
import { connect } from "dva";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileForm from "../components/ProfileForm";
import BuyerCart from "../components/BuyerCart";
import BuyerCheckout from "../components/BuyerCheckout";
import BuyerItem from "../components/BuyerItem";
import BuyerOrder from "../components/BuyerOrder";
import { routerRedux } from "dva/router";
import { withStyles, TextField } from "@material-ui/core";
import BuyerEditOrder from "../components/BuyerEditOrder";

const NavigationButton = withStyles({
  root: {
    backgroundColor: "rgba(255,166,50,0.6)",
    color: "#fff",
    width: "90%",
    height: 44,
    fontSize: 14,
    margin: "11px auto"
  }
})(Button);

const NavigationButtonActive = withStyles({
  root: {
    backgroundColor: "rgba(255,166,50,1)",
    color: "#fff",
    width: "90%",
    height: 44,
    fontSize: 14,
    margin: "11px auto"
  }
})(Button);

class BuyerIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {
    this.props.dispatch({ type: "navigator/clearBuyer" });
    this.props.dispatch({
      type: "navigator/save",
      payload: { buyerItemShow: true }
    });
  }
  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              Buyer
            </Typography>
            {this.props.buyerStore.buyerEntity.id === "" && (
              <Button
                color="inherit"
                onClick={() => {
                  this.props.dispatch(routerRedux.push({ pathname: "/auth" }));
                }}
              >
                Login
              </Button>
            )}
            <Button
              color="inherit"
              onClick={() => {
                this.props.dispatch({
                  type: "buyerStore/clear"
                });
                this.props.dispatch({
                  type: "navigator/clear"
                });
                this.props.dispatch(routerRedux.push({ pathname: "/" }));
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
            >
              {this.props.navigator.buyerItemShow ? (
                <NavigationButtonActive>Item List</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearBuyer" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { buyerItemShow: true }
                    });
                  }}
                >
                  Item List
                </NavigationButton>
              )}
              {this.props.navigator.buyerOrderShow ? (
                <NavigationButtonActive>Order List</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearBuyer" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { buyerOrderShow: true }
                    });
                  }}
                >
                  Order List
                </NavigationButton>
              )}
              {this.props.navigator.buyerEditOrderShow ? (
                <NavigationButtonActive>Feedback Order</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearBuyer" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { buyerEditOrderShow: true }
                    });
                  }}
                >
                  Feedback Order
                </NavigationButton>
              )}
              {this.props.navigator.profileShow ? (
                <NavigationButtonActive>Edit Profile</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearBuyer" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { profileShow: true }
                    });
                  }}
                >
                  Edit Profile
                </NavigationButton>
              )}
              {this.props.navigator.buyerCartShow ? (
                <NavigationButtonActive>Cart</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearBuyer" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { buyerCartShow: true }
                    });
                  }}
                >
                  Cart
                </NavigationButton>
              )}
            </Grid>
          </Grid>
          <Grid item xs={10}>
            {this.props.navigator.buyerItemShow && <BuyerItem />}
            {this.props.navigator.profileShow && <ProfileForm />}
            {this.props.navigator.buyerCartShow && <BuyerCart />}
            {this.props.navigator.buyerCheckoutShow && <BuyerCheckout />}
            {this.props.navigator.buyerOrderShow && <BuyerOrder />}
            {this.props.navigator.buyerEditOrderShow && <BuyerEditOrder />}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

BuyerIndexPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerIndexPage);
