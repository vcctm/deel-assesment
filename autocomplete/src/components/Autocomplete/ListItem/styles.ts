import styled, { css } from 'styled-components';

export const ItemWrapper = styled.button`
  ${() => css`
    width: 100%;
    display: flex;
    border-radius: 8px;
    border: 0px;
    color: white;
    padding: 6px;
    background-color: #121212;
    transition: all ease-in-out 0.1s;
    &:hover {
      cursor: pointer;
      color: #121212;
      background-color: lightblue;
    }
  `}
`;
