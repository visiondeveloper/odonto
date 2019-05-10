import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../store/ducks/repositories/types';
import { ApplicationState } from '../store';

import * as RepositoriesActions from '../store/ducks/repositories/actions';

import RepositoryList from '../components/RepositoryList';

import logo from '../assets/imgs/logo.png';
import LoginForm from '../components/LoginForm';

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(): void
}
  
type Props = StateProps & DispatchProps
  
class Login extends Component<Props> {
    componentDidMount() {
      const { loadRequest } = this.props;
  
      loadRequest();
    }
  
    render() {
      const { repositories } = this.props;
  
      return (
        <div className='login'>
        <div className='container'>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="logo">
                <img src={logo} alt="Logo Odonto Now"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="papper">
                <h1>Olá!</h1>
                <div className="form-content">
                  <LoginForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      );
    }
  }
  
  const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  

