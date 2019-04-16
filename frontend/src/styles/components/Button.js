import styled, { css } from "styled-components";

const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 50px;
  background: #e5556e;
  border: none;
  width: 300px;
  cursor: pointer;
  transition: all 0.1s linear;
  text-align: center;
  margin: 0 auto;
  display: block;

  &:hover {
    background: #ff6c85;
    transform: scale(1.05);
  }

  ${props =>
    props.outlined
      ? css`
          background: none;
          color: ${props.outlineColor};
          border: 1px solid ${props.outlineColor};

          &:hover {
            background: none;
          }
        `
      : null}
`;

export default Button;
