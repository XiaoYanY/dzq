import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">{this.props.children}</div>
        <style jsx>{`
          .container {
            width: 100vw;
            height: 100vh;
            background: #eee;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
