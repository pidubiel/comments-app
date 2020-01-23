import React from 'react';
import { connect } from 'react-redux';
import { createNewComment } from '../../redux/comments/commentsActions';
import { StyledFormGroup } from '../../styledComponents';

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      emailValue: '',
      titleValue: '',
      contentValue: ''
    };
  }
  handleTitleChange = event => {
    this.setState({ titleValue: event.target.value });
  };
  handleContentChange = event => {
    this.setState({ contentValue: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ emailValue: event.target.value });
  };
  isTitleValid = () => {
    const re = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]{3,}$/;
    return re.test(this.state.titleValue);
  };
  isEmailValid = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.emailValue);
  };
  isContentValid = () => {
    const re = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\s\.\,]{2,}$/;
    return re.test(this.state.contentValue);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { createNewComment, comments } = this.props;
    let maxId = comments.reduce((max, comment) => (comment.id > max ? comment.id : max), comments[0].id);
    if (this.isTitleValid() && this.isEmailValid() && this.isContentValid()) {
      const newComment = {
        title: this.state.titleValue,
        email: this.state.emailValue,
        body: this.state.contentValue,
        id: ++maxId,
        isFav: false
      };

      this.setState({ isValid: true, emailValue: '', titleValue: '', contentValue: '' }, () => createNewComment(newComment));
    }
  };
  render() {
    const { titleValue, emailValue, contentValue } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <StyledFormGroup>
          <label htmlFor='title'>Nazwa:</label>
          <input type='text' name='title' id='title' value={titleValue} onChange={e => this.handleTitleChange(e)} onBlur={() => this.isTitleValid()} />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' value={emailValue} onChange={e => this.handleEmailChange(e)} onBlur={() => this.isEmailValid()} />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor='content'>Treść:</label>
          <textarea id='content' value={contentValue} onChange={e => this.handleContentChange(e)} onBlur={() => this.isContentValid()} />
        </StyledFormGroup>
        <input type='submit' value='Dodaj komentarz'></input>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewComment: newComment => dispatch(createNewComment(newComment))
  };
};

const mapStateToProps = ({ comments }) => {
  return comments;
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm);
