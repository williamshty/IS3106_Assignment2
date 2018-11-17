import React from "react";
import { connect } from "dva";

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
    return <div>AdminIndexPage</div>;
  }
}

AdminIndexPage.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AdminIndexPage);
