/*import React from "react";

const Profile = () => <h1>Profile</h1>;

export default Profile;
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../store/ducks/repositories/types';
import { ApplicationState } from '../store';

import * as RepositoriesActions from '../store/ducks/repositories/actions';

import RepositoryList from '../components/RepositoryList';

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(): void
}
  
  type Props = StateProps & DispatchProps
  
  class Profile extends Component<Props> {
    componentDidMount() {
      const { loadRequest } = this.props;
  
      loadRequest();
    }
  
    render() {
      const { repositories } = this.props;
  
      return (
          <div>
              <h1>Profile teste</h1>
              <RepositoryList />
          </div>
        
      );
    }
  }
  
  const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  