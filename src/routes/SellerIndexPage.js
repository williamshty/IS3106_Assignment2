import React, { Fragment } from "react";
import { connect } from "dva";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProfileForm from "../components/ProfileForm";
import SellerAddItem from "../components/SellerAddItem";
import SellerEditItem from "../components/SellerEditItem";
import SellerItem from "../components/SellerItem";
import SellerOrder from "../components/SellerOrder";
import { routerRedux } from "dva/router";
import { withStyles, TextField } from "@material-ui/core";

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

class SellerIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {
    this.props.dispatch({ type: "navigator/clearSeller" });
    this.props.dispatch({
      type: "navigator/save",
      payload: { sellerItemShow: true }
    });
  }
  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              Seller
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                this.props.dispatch({
                  type: "sellerStore/clear"
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
              {this.props.navigator.sellerItemShow ? (
                <NavigationButtonActive>Item List</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearSeller" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { sellerItemShow: true }
                    });
                  }}
                >
                  Item List
                </NavigationButton>
              )}
              {this.props.navigator.sellerOrderShow ? (
                <NavigationButtonActive>Order List</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearSeller" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { sellerOrderShow: true }
                    });
                  }}
                >
                  Order List
                </NavigationButton>
              )}
              {this.props.navigator.profileShow ? (
                <NavigationButtonActive>Edit Profile</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearSeller" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { profileShow: true }
                    });
                  }}
                >
                  Edit Profile
                </NavigationButton>
              )}
              {this.props.navigator.sellerAddItemShow ? (
                <NavigationButtonActive>Add Item</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearSeller" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { sellerAddItemShow: true }
                    });
                  }}
                >
                  Add Item
                </NavigationButton>
              )}
              {this.props.navigator.sellerEditItemShow ? (
                <NavigationButtonActive>Edit Item</NavigationButtonActive>
              ) : (
                <NavigationButton
                  onClick={() => {
                    this.props.dispatch({ type: "navigator/clearSeller" });
                    this.props.dispatch({
                      type: "navigator/save",
                      payload: { sellerEditItemShow: true }
                    });
                  }}
                >
                  Edit Item
                </NavigationButton>
              )}
            </Grid>
          </Grid>
          <Grid item xs={10}>
            {this.props.navigator.sellerItemShow && <SellerItem />}
            {this.props.navigator.profileShow && <ProfileForm />}
            {this.props.navigator.sellerAddItemShow && <SellerAddItem />}
            {this.props.navigator.sellerEditItemShow && <SellerEditItem />}
            {this.props.navigator.sellerOrderShow && <SellerOrder />}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SellerIndexPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerIndexPage);
