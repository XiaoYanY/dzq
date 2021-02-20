import React, { Component } from 'react';
import css from './styles.styl';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={css.container}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}
