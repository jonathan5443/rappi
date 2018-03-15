import React, { Component } from 'react';

export default class NavBarItem extends Component {
  render() {
    let childnodes = null;
    if (this.props.children) {
      childnodes = this.props.children.map((childnode) => {
        return (
          <NavBarItem key={childnode.id} node={childnode} onSelectCategory={this.props.onSelectCategory} children={childnode.people} />
        );
      });
    }

    return (
      <li key={this.props.node.id}>
        <span onClick={ () => this.props.onSelectCategory(this.props.node.id)}>{this.props.node.name}</span>
        {childnodes ?
          <ul>{childnodes}</ul>
          : null}
      </li>
    );
  }
}