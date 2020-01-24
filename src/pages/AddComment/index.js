import React from 'react';
import { AddCommentForm } from '../../components';
import { connect } from 'react-redux';
import { fetchCommentsIfNeeded } from '../../redux/comments/commentsActions';
import { MainContainer } from '../../styledComponents';

class AddComment extends React.Component {
  componentDidMount() {
    const { fetchCommentsIfNeeded } = this.props;
    fetchCommentsIfNeeded();
  }
  render() {
    return (
      <MainContainer>
        <AddCommentForm />
      </MainContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCommentsIfNeeded: () => dispatch(fetchCommentsIfNeeded())
  };
};

export default connect(null, mapDispatchToProps)(AddComment);
