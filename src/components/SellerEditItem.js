import React from "react";
import { connect } from "dva";

class SellerEditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>SellerEditItem</div>;
  }
}

SellerEditItem.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerEditItem);
