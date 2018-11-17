import React from "react";
import { connect } from "dva";

class BuyerCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>BuyerCheckout</div>;
  }
}

BuyerCheckout.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerCheckout);
