import React from "react";
import { connect } from "dva";

class BuyerIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>BuyerIndexPage</div>;
  }
}

BuyerIndexPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BuyerIndexPage);
