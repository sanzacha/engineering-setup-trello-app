import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Boards extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>This is the Board component</Fragment>
    );
  }
}
