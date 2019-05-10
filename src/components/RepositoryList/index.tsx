import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';


interface StateProps {
  repositories: Repository[]
}
 
interface DispatchProps {
  loadRequest(): void,
  loadRequestVision(): void
}

interface  OwnProps{

}

type Props = StateProps & DispatchProps & OwnProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();

  }
  loadAgain = () => {
    console.log('submit');

    const { loadRequestVision } = this.props;

    const time = setTimeout(() =>{
      console.log(loadRequestVision());
    },3000)
    
  }

  render() {
    const { repositories } = this.props;

    return (
      <div onClick={this.loadAgain}>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
