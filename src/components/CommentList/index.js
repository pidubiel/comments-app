import React from 'react';
import { SingleComment } from '../index';
import { MainContainer, CommentListContainer } from '../../styledComponents';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <MainContainer>
        <CommentListContainer>
          {comments &&
            comments.length > 0 &&
            comments.map(el => (
              <SingleComment
                data={{
                  title: el.title,
                  email: el.email,
                  content: el.body,
                  id: el.id,
                  isFav: el.isFav
                }}
                key={el.id}
              />
            ))}
        </CommentListContainer>
      </MainContainer>
    );
  }
}

export default CommentList;
