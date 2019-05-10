import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';

import { Formik } from 'formik';
import { 
  FormControl, 
  TextField,
  Button,
  //Checkbox,
  //FormControlLabel
} from '@material-ui/core';

import facebook from '../../assets/imgs/icon-facebook.png';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { Repository } from '../../store/ducks/repositories/types';

import { Category} from '../../store/ducks/categories/types';
import * as CategoriesActions from '../../store/ducks/categories/actions';

import { Login } from '../../store/ducks/logins/types';
import * as LoginsActions from '../../store/ducks/logins/actions';

const user:Login = {
  __v:0,
  _id:'',
  createdAt:'',
  email:'',
  emailActive:0,
  jwtToken:'',
  name:'',
  password:'',
  role:'',
  status:0,
  updatedAt:''
}

const label = {
  disableAnimation: true,
  shrink: true
}


interface StateProps {
  repositories: Repository[],
  categories : Category[],
  login: Login
}


interface DispatchProps {
  loadRequest(): void,
  makeLogin(data:Login): void
}

type Props = StateProps & DispatchProps;

class LoginForm extends Component<Props> {

  onHandleRegistration = (event: any) => {
    console.log('entrou submit');
    const { makeLogin } = this.props;  
    const { login } = this.props;
    
    event.preventDefault();

      login.email= event.target.email.value;
      login.password = event.target.password.value;

      const userLogado = makeLogin(user); 

      console.log('entrou logado');
      console.log(userLogado);
      console.log();

  }

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }
 
  checkProps = () => {
    const {login} = this.props;
    console.log(login);

  }

  render() {
    const props = this.props;
    console.log(props);


    return (
     
            <> 
           
              <form onSubmit={this.onHandleRegistration}>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <FormControl fullWidth className="mb-12">
                      <TextField
                        name="email"
                        label="E-mail:"
                        type="email"
                        id="username"
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <FormControl fullWidth className="mb-12">
                      <TextField
                        name="password"
                        label="Senha:"
                        type="password"
                        id = "password"
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <a id="esqueceu">Esqueceu seu email ou senha?</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <Button type="submit" >
                      Login
                    </Button>

                    <Button onClick={this.checkProps} type="button">
                      Testar
                    </Button>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="facebook">
                      <img src={facebook} alt="Facebook"/>
                      <a href=""> 
                        Conectar com Facebook
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="signature">
                      <a href="">Novo por aqui? <span>Assine agora</span></a>
                    </div>
                  </div>
                </div>
              </form>

            </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  categories: state.categories.data,
  login: state.logins.login
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LoginsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);