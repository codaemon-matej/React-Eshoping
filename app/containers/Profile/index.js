import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { fetchProfileRequest, updateProfileRequest } from './actions';
import logo from '../../images/model_2_bg.jpg';

const ProfileContainer = styled.div`
  text-align: center;

  img {
    height: 350px;
  }

  input {
    font-size: 16px;

    &::placeholder {
      color: black;
    }
  }
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { fetchProfileRequest } = this.props;
    fetchProfileRequest();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    updateProfileRequest: PropTypes.func,
    profile: PropTypes.shape({
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
      messages: PropTypes.array,
      errors: PropTypes.array,
    }),
  };

  submit = (profile) => {
    const { updateProfileRequest } = this.props;
    this.setState({ submitted: true });
    updateProfileRequest(profile);
  };

  render() {
    const {
      handleSubmit,
      profile: { requesting, messages, errors, successful },
    } = this.props;

    const { user } = this.props;
    const { submitted } = this.state;

    return (
      <ProfileContainer>
        <div className="container">
          <h1 className="page-header">Edit Profile</h1>
          {user && <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="text-center">
                <img src={logo} alt="profile" />
              </div>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
              {submitted && <div className="alert alert-info alert-dismissable">
                <a className="panel-close close" data-dismiss="alert">×</a> 
                Your profile has been successfully updated...
              </div>}
              <h3>Personal info</h3>
              <form className="form-horizontal" onSubmit={handleSubmit(this.submit)}>
                <div className="form-group">
                  <label className="col-lg-3 control-label">First name:</label>
                  <div className="col-lg-8">
                    <Field type="text" className="form-control" component="input" placeholder={user.first_name} name="first_name" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Last name:</label>
                  <div className="col-lg-8">
                    <Field type="text" className="form-control" component="input" placeholder={user.last_name} name="last_name" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email:</label>
                  <div className="col-lg-8">
                    <Field type="text" className="form-control" component="input" placeholder={user.email} name="email" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Username:</label>
                  <div className="col-md-8">
                    <Field type="text" className="form-control" component="input" placeholder={user.username} name="username" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Password:</label>
                  <div className="col-md-8">
                    <Field type="text" className="form-control" component="input" placeholder={user.password} name="password" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label"></label>
                  <div className="col-md-8">
                    <button className="btn btn-black" type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </ProfileContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.profile.user,
  profile: state.profile,
});

const connected = connect(
  mapStateToProps,
  { fetchProfileRequest, updateProfileRequest },
)(Profile);

export default reduxForm({
  form: 'profile',
})(connected);
