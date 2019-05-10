import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Message } from '../../../store/ducks/messages/types';
import { ApplicationState } from '../../../store';

import * as MessagesActions from '../../../store/ducks/messages/actions';

interface StateProps {
messages: Message[]
}

interface DispatchProps {
setMessage(): void,
getMessage():void
}

interface  OwnProps{

}
type Props = StateProps & DispatchProps & OwnProps;

class Messages extends Component<Props>{  
    render(){

        const { messages } = this.props;
        return (
            <div>
            <ul>
                {messages.map(message => (
            <li key={message.time}>{message.body}</li>
                ))}
            </ul>
            </div>
        )
    }
}


const mapStateToProps = (state: ApplicationState) => ({
    messages: state.messages.data
  });
  
  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MessagesActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Messages);
  