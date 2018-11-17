import React from "react";
import { connect } from "dva";

class SellerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>SellerItem</div>;
  }
}

SellerItem.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerItem);
