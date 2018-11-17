import React from "react";
import { connect } from "dva";

class SellerAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>SellerAddItem</div>;
  }
}

SellerAddItem.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerAddItem);
