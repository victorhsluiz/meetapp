import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import AuthActions from "../../../store/ducks/auth";

import Button from "../../../styles/components/Button";
import { Container, SignForm } from "../styles";

import logo from "../../../assets/logo.svg";

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired
  };

  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <img src={logo} alt="Meetapp Logo" />

        <SignForm onSubmit={this.handleSubmit}>
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

          <Button type="submit">Entrar</Button>
        </SignForm>

        <Link to="/signup">Crie uma conta, é grátis</Link>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
