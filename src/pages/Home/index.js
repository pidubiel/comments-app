import React from 'react';
import { CommentList } from '../../components';
import { connect } from 'react-redux';
import { fetchCommentsIfNeeded } from '../../redux/comments/commentsActions';

class Home extends React.Component {
  componentDidMount() {
    const { fetchCommentsIfNeeded } = this.props;
    fetchCommentsIfNeeded();
  }
  render() {
    const { comments } = this.props;
    return (
      <>
        <CommentList comments={comments} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCommentsIfNeeded: () => dispatch(fetchCommentsIfNeeded())
  };
};

const mapStateToProps = ({ comments }) => {
  return comments;
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
