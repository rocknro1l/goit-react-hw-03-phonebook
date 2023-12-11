import React, { Component } from 'react';
import { List, DeleteBtn, ContactItem } from './ContactList.styled';
import { nanoid } from 'nanoid';

export default class ContactList extends Component {
  render() {
    return (
      <List>
        {this.props.contacts.map(el => (
          <ContactItem key={nanoid()}>
            <h4>
              {el.name}: {el.number}
            </h4>
            <DeleteBtn onClick={() => this.props.onDelete(el.id)} type="button">
              DELETE
            </DeleteBtn>
          </ContactItem>
        ))}
      </List>
    );
  }
}
