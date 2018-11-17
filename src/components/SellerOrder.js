import React from "react";
import { connect } from "dva";

class SellerOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>SellerOrder</div>;
  }
}

SellerOrder.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerOrder);
