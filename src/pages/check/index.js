import React from 'react';

export default class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div>hi {process.env.APP_NAME}v0.0.1</div>;
  }
}
