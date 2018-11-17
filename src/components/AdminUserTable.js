import React from "react";
import { connect } from "dva";

class AdminUserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>AdminUserTable</div>;
  }
}

AdminUserTable.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AdminUserTable);
