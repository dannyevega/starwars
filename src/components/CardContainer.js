import styled from 'styled-components';

export const CardContainer = styled.div`
  .card-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .name {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`
