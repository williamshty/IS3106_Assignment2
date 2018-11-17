import React from "react";
import { connect } from "dva";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>RegistrationForm</div>;
  }
}

RegistrationForm.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(RegistrationForm);
