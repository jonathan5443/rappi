import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/Navbar";


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions/store";

class App extends React.Component {

  componentDidMount() {
    this.props.actions.create_store_structure();
  }

  render() {
    return (
      <div className="mainWrapper">
        <Header />
        <Navbar />
        <div className="container contentWrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(undefined, mapDispatchToProps)(App);