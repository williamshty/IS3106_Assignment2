import React from "react";
import { connect } from "dva";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>{this.state.greeting}</div>;
  }
}

Example.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Example);
