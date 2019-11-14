import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';

import {signupRequest} from './actions';
import Notifications from '../../components/Notifications';

const RegisterContainer = styled.div`
  text-align: center;

  .form-signup {
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

export class Register extends Component {
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
    signupRequest: PropTypes.func,
    signup: PropTypes.shape({
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
      this.props.signupRequest(values);
    }
  };

  render() {
    const {
      handleSubmit,
      signup: { requesting, messages, errors, successful },
    } = this.props;

    const { email, password, submitted } = this.state;

    let signupErrorMessage = "";

    if (this.props.signup.errors.length) {
      signupErrorMessage = "signupErrorMessage";
    }

    return (
      <RegisterContainer>
        <div className="container">
          <form className="form-signup" onSubmit={handleSubmit(this.submit)}>
            <h2>Please sign up</h2>
            <div className={signupErrorMessage}>
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
            <Field type="password" className={`form-control {this.state.password && 'has-val'}`} component="input" placeholder="Password" name="password" value={password} onChange={this.handleChange} />            <div className="checkbox">
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          </form>
        </div>
        <Footer />
      </RegisterContainer>
    );
  }
}

const mapStateToProps = state => ({ signup: state.signup });

const connected = connect(
  mapStateToProps,
  { signupRequest },
)(Register);

export default reduxForm({
  form: 'signup',
})(connected);
