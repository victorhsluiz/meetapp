import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #e5556e;
    font-size: 47px;
  }
  a {
    margin-top: 15px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

export const SignForm = styled.form`
  max-width: 300px;

  .form-control {
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 20px 0;

    &.form-control-last {
      margin-bottom: 30px;
    }

    label {
      width: 100%;
      display: block;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      text-align: left;

      input {
        margin-top: 5px;
        width: 100%;
        background: none;
        border: none;
        padding: 10px;
        color: #fff;
        font-size: 14px;
        background: #24202c;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        &:focus {
          background: rgba(255, 255, 255, 0.1);
        }
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        box-shadow: none;
        -webkit-box-shadow: 0 0 0 30px #24202c inset !important;
        -webkit-text-fill-color: #ffffff !important;
      }
    }
  }
`;
