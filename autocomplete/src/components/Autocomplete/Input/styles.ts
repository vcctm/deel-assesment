import styled, { css } from 'styled-components';

export const InputWrapper = styled.input`
  ${() => css`
    width: 100%;
    display: flex;
    background-color: white;
    border-radius: 8px;
    border: 0px;
    color: #131313;
    padding: 6px;
    &:focus {
      cursor: pointer;
      background-color: lightblue;
    }
  `}
`;
