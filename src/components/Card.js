import styled from 'styled-components';

export const Card = styled.div`
  .card {
    border-color: transparent;
    transition: all .5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247,247,247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
`
