import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import AuthActions from "../../../store/ducks/auth";

import Button from "../../../styles/components/Button";
import { Container, SignForm } from "../styles";

import logo from "../../../assets/logo.svg";

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired
  };

  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, email, password, password_confirmation } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(username, email, password, password_confirmation);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password, password_confirmation } = this.state;

    return (
      <Container>
        <img src={logo} alt="Meetapp Logo" />

        <SignForm onSubmit={this.handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">
              Nome
              <input
                type="text"
                placeholder="Digite seu nome"
                id="username"
                name="username"
                onChange={this.handleInputChange}
                value={username}
              />
            </label>
          </div>

          <div className="form-control">
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                placeholder="Digite seu e-mail"
                id="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className="form-control form-control-last">
            <label htmlFor="password">
              Senha
              <input
                type="password"
                placeholder="Digite sua senha"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className="form-control form-control-last">
            <label htmlFor="password_confirmation">
              Confirmação da Senha
              <input
                type="password"
                placeholder="Confirme sua senha"
                id="password_confirmation"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <Button type="submit">Criar conta</Button>
        </SignForm>

        <Link to="/signin">Já tenho conta</Link>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
