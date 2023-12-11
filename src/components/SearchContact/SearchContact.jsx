import React, { Component } from 'react';
import { SearchWrapper } from './SearchContact.styled';
import { Input } from 'components/ContactInput/ContactInput.styled';

export default class SearchContact extends Component {
  render() {
    return (
      <SearchWrapper>
        <label htmlFor="search">Find contact:</label>
        <Input
          value={this.props.value}
          onChange={this.props.onSearch}
          type="text"
          id="search"
        />
      </SearchWrapper>
    );
  }
}
