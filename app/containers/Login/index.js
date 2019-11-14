/**
 *
 * LoginForm
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';

import {loginRequest} from './actions';
import Notifications from '../../components/Notifications';

const LoginContainer = styled.div`
  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 40px auto;
    text-align: center;

    .form-control {
      margin-top: 20px;
    }

    .help-block {
      color: #a94442;
    }
  }
`;

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    loginRequest: PropTypes.func,
    login: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array,
    }),
  };

  submit = values => {
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.loginRequest(values);
    }
  };

  render() {
    const {
      handleSubmit,
      login: { requesting, messages, errors, successful },
    } = this.props;

    const { email, password, submitted } = this.state;

    let loginErrorMessage = "";

    if (this.props.login.errors.length) {
      loginErrorMessage = "loginErrorMessage";
    }

    return (
      <LoginContainer>
        <div className="container">
          <form className="form-signin" onSubmit={handleSubmit(this.submit)}>
            <h2>Please sign in</h2>
            <div className={loginErrorMessage}>
              <Notifications
                requesting={requesting}
                successful={successful}
                messages={messages}
                errors={errors}
              />
            </div>
            <Field type="text" className={`form-control {this.state.email && 'has-val'}`} component="input" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} />
            {submitted && !email &&
              <div className="help-block">Username is required</div>
            }
            <Field type="password" className={`form-control {this.state.password && 'has-val'}`} component="input" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
            <div className="checkbox">
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
              <label htmlFor="remember-me">
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p>Or</p>
            <p><a href="/signup">Register</a></p>
          </form>
        </div>
        <Footer />
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({ login: state.login });

const connected = connect(
  mapStateToProps,
  { loginRequest },
)(Login);

export default reduxForm({
  form: 'login',
})(connected);
