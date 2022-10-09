import styled, { css } from 'styled-components';

export const BoxWrapper = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: green;
    background-color: #121212;
    height: 400px;
    overflow-y: scroll;
  `}
`;
