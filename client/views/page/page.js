import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Gallery from "../../components/gallery/gallery";
import List from "../../components/list/list";

class Page extends Component {
  constructor(props) {
    super(props);
  }

  linkGenerator(item) {
    switch (item.element) {
      case "ELEMENT_BASIC_PAGE":
        return <li key={item["id-node"]} onClick={() => this.props.changePage(item["id-node"])} ><span>{item.name}</span></li>
        break
      case "ELEMENT_FILE":
        return <li><a key={item["id-node"]} href={this.props.endpoint + item._links.file["href"]} target="_blank">{item.name}</a></li>
        break
      default:
        return <li key={item["id-node"]} onClick={() => this.props.changePage(item["id-node"])} ><span>{item.name}</span></li>
        break
    }
  }

  multimediaRender() {  
    if(this.props.data._embedded["children-nodes"][0]._links["file"]){
      return <List endpoint={this.props.endpoint} list={this.props.data._embedded["children-nodes"]} />
    }
    if(this.props.data._embedded["children-nodes"][0]._links["video"]){
      return <List endpoint={this.props.endpoint} list={this.props.data._embedded["children-nodes"]} />
    }
    return <Gallery endpoint={this.props.endpoint} images={this.props.data._embedded["children-nodes"]} />
  }

  render() {
    return (
      <div className="col-12 main-page">
        {Object.keys(this.props.data).length > 0 &&
          <div>
            <h1><img className="image_footer" src={require("../../images/linea.png")} />{this.props.data.name}</h1>
            {this.props.data.element === "ELEMENT_MULTIMEDIA_GALLERY" ? (
              this.multimediaRender()
            ): (
                <ul>
                  {this.props.data._embedded["children-nodes"].map((item) =>
              this.linkGenerator(item)
            )}
                </ul>
              )}
            <div dangerouslySetInnerHTML={{ __html: this.props.data.description }} />
      </div>
        }
      </div>
    );
  }
}

export default Page;
