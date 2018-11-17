import React from "react";
import { connect } from "dva";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return <div>ProfileForm</div>;
  }
}

ProfileForm.propTypes = {};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProfileForm);
