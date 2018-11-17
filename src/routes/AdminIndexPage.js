import React, { Fragment } from "react";
import { connect } from "dva";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AdminUserTable from "../components/AdminUserTable";
import { routerRedux } from "dva/router";

class AdminIndexPage extends React.Component {
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
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              Admin
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                this.props.dispatch({
                  type: "adminStore/clear"
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
          <Grid item xs={1} />
          <Grid item xs={10}>
            <AdminUserTable />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Fragment>
    );
  }
}

AdminIndexPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AdminIndexPage);
