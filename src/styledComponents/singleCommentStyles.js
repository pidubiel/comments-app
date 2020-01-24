import styled from 'styled-components';

const SingleCommentContainer = styled.div`
  flex-basis: calc(100% / 4 - 20px);
  padding: 20px;
  margin: 10px;
  background: white;
  box-shadow: -1rem 0 3rem #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #121016;
  min-height: 300px;

  p {
    text-align: center;
  }

  h5 {
    margin-top: auto;
    text-align: center;
    color: #fff;
  }

  @media (max-width: 1200px) {
    flex-basis: calc(100% / 2 - 20px);
  }

  @media (max-width: 680px) {
    flex-basis: calc(100%);
  }
`;

export default SingleCommentContainer;
