import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Board extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>This is the Board component for boardId: {this.props.id}</Fragment>
    );
  }
}
