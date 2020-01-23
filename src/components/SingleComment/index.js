import React from 'react';
import styled from 'styled-components';
import { SingleCommentContainer } from '../../styledComponents';
import { connect } from 'react-redux';
import { addToFav, removeFromFav } from './../../redux/comments/commentsActions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const Title = styled.h3`
  font-size: 20px;
  text-align: center;
  color: #7a7a8c;
  font-weight: 900;
  margin-bottom: 20px;
  border-bottom: 1px solid #0e0c12;
  padding-bottom: 25px;
`;
const Email = styled.p`
  color: #fff;
  font-weight: 200;
  font-size: 10px;
`;
const Content = styled.p`
  font-weight: 200;
  margin: 20px 0;
  color: #fff;
  padding-bottom: 30px;
  margin-bottom: auto;
`;

const SingleComment = ({ data, addToFav, removeFromFav, match }) => {
  const isInFavPath = match.path === '/favourites';
  const renderButton = () => {
    if (data.isFav) {
      if (isInFavPath) {
        return <button onClick={() => removeFromFav(data)}>Usuń z ulubionych</button>;
      } else {
        return <h5>Polubiono</h5>;
      }
    } else {
      return <button onClick={() => addToFav(data)}>Dodaj do ulubionych</button>;
    }
  };
  return (
    <SingleCommentContainer>
      <Title>{data.title}</Title>
      <Email>{data.email}</Email>
      <Content>{data.content.slice(0, 20)}...</Content>
      {renderButton()}
    </SingleCommentContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToFav: comment => dispatch(addToFav(comment)),
    removeFromFav: comment => dispatch(removeFromFav(comment))
  };
};

export default compose(withRouter, connect(null, mapDispatchToProps))(SingleComment);
