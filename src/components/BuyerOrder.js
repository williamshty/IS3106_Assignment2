import React from "react";
import { connect } from "dva";

class BuyerOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>BuyerOrder</div>;
  }
}

BuyerOrder.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerOrder);
