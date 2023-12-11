import styled from 'styled-components';

export const List = styled.ul``;

export const ContactItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const DeleteBtn = styled.button`
  align-items: center;
  background-color: #f8a9a9;
  background-position: 0 0;
  border: 1px solid #fee0e0;
  border-radius: 11px;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  padding: 2px 12px;
  text-align: left;
  text-underline-offset: 1px;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;

  &:active {
    background-color: #d41e0d;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
    color: #ffffff;
  }

  &:hover {
    background-color: #f31d1d;
    border-color: #faa4a4;
  }
`;
