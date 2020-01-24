import React from 'react';
import { CommentList } from '../../components';
import { connect } from 'react-redux';
import { fetchCommentsIfNeeded } from '../../redux/comments/commentsActions';

class Favourites extends React.Component {
  componentDidMount() {
    const { fetchCommentsIfNeeded } = this.props;
    fetchCommentsIfNeeded();
  }
  render() {
    const favComments = this.props.comments.filter(el => el.isFav);
    return (
      <>
        <CommentList comments={favComments} />
      </>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return comments;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCommentsIfNeeded: () => dispatch(fetchCommentsIfNeeded())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
