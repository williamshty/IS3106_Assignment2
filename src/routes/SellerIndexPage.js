import React from "react";
import { connect } from "dva";

class SellerIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>SellerIndexPage</div>;
  }
}

SellerIndexPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SellerIndexPage);
