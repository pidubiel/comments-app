import React from 'react';
import { connect } from 'react-redux';
import { createNewComment } from '../../redux/comments/commentsActions';
import { StyledFormGroup } from '../../styledComponents';
import isValid from '../../utils/regExp';

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
  handleInputChange = event => {
    switch (event.target.id) {
      case 'title':
        this.setState({ titleValue: event.target.value });
        break;
      case 'email':
        this.setState({ emailValue: event.target.value });
        break;
      case 'content':
        this.setState({ contentValue: event.target.value });
        break;
      default:
        break;
    }
  };
  isTitleValid = () => {
    return isValid.title.test(this.state.titleValue);
  };
  isEmailValid = () => {
    return isValid.email.test(this.state.emailValue);
  };
  isContentValid = () => {
    return isValid.content.test(this.state.contentValue);
  };
  createNewId = comments => comments.reduce((max, comment) => (comment.id > max ? comment.id : max), comments[0].id) + 1;
  handleSubmit = e => {
    e.preventDefault();
    const { createNewComment, comments } = this.props;
    if (this.isTitleValid() && this.isEmailValid() && this.isContentValid()) {
      const newComment = {
        title: this.state.titleValue,
        email: this.state.emailValue,
        body: this.state.contentValue,
        id: this.createNewId(comments),
        isFav: false
      };

      this.setState({ isValid: true, emailValue: '', titleValue: '', contentValue: '' }, () => createNewComment(newComment));
    } else {
      alert('Błędnie wypełniony formularz.');
    }
  };
  render() {
    const { titleValue, emailValue, contentValue } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <StyledFormGroup>
          <label htmlFor='title'>Nazwa:</label>
          <input type='text' name='title' id='title' value={titleValue} onChange={e => this.handleInputChange(e)} onBlur={() => this.isTitleValid()} />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' value={emailValue} onChange={e => this.handleInputChange(e)} onBlur={() => this.isEmailValid()} />
        </StyledFormGroup>

        <StyledFormGroup>
          <label htmlFor='content'>Treść:</label>
          <textarea id='content' value={contentValue} onChange={e => this.handleInputChange(e)} onBlur={() => this.isContentValid()} />
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
