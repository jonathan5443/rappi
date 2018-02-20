import React from "react";
import axios from "axios";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import Page from "../views/page/page";
import Breadcrumb from "../components/breadcrumb/breadcrumb";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.match.params.page ? this.props.match.params.page  :  "1",
      data: {}
    };
    this.endpoint = "https://www.cedoe.mil.co/api";
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getApiData();
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.page !== this.props.match.params.page){
      this.setState({
        page: newProps.match.params.page
      }, () => {
        this.getApiData()
      })
    }
  }

  changePage(page) {
    this.props.history.push(`/${page}`)
    this.setState({
      page
    }, () => {
      this.getApiData()
    })
  }

  getApiData() {
    axios.get(this.endpoint + "/page/" + this.state.page)
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="mainWrapper">
        <Header data={this.state.data} />
        <NavBar data={this.state.data} changePage={this.changePage} currentPage={this.props.match.params.page}/>
        <div className="container contentWrapper">
          <div className="row">
            <Breadcrumb changePage={this.changePage} data={this.state.data} />
            <Page endpoint={this.endpoint} data={this.state.data} changePage={this.changePage} />
          </div>
        </div>
        <Footer data={this.state.data} />
      </div>
    );
  }
}
