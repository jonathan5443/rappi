import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    this.newsFormatter()
  }

  newsFormatter() {
    let listFormatted = []
    this.props.list.forEach(item => {
      listFormatted.push({
        image: item._links.image ? this.props.endpoint + item._links.image["href"]: this.props.endpoint  + "/image/2608",
        tag: item.name,
        href: item._links.video ? item._links.video["href"] : this.props.endpoint + item._links.file["href"]
      })
    });
    this.setState({
      list: listFormatted
    })
  }


  render() {  
    return (
      <div className="list">
        {this.state.list.map(item => 
          <a href={item.href} target="_BLANK" className="col-3 list-item">
            <p className="list-title">{item.tag}</p>
            <div className="img-container">
             <img src={item.image} />
            </div>
          </a>
        )}
      </div>
    );
  }
}

export default List;
