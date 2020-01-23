import styled from 'styled-components';

const StyledFormGroup = styled.ul`
  text-align: center;
  max-width: 600px;
  margin: 20px auto;

  label,
  input {
    display: block;
    width: 100%;
  }

  label {
    color: #7a7a8c;
    text-align: left;
    font-weight: 200;
    font-size: 14px;
  }

  input,
  textarea {
    display: block;
    outline: none;
    color: white;
    width: 100%;
    margin-top: 5px;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background-color: #121016;
    box-shadow: -1rem 0 3rem #000;
    font-size: 16px;
  }
  textarea {
    min-height: 300px;
  }
`;

export default StyledFormGroup;
