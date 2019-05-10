import { action } from 'typesafe-actions';
import { MessagesTypes, Message } from './types';

export const getMessage = () => action(MessagesTypes.GET_MESSAGE);

//export const setMessage = (data : Message[]) => action(MessagesTypes.SET_MESSAGE, { data });
export const setMessage = () => action(MessagesTypes.SET_MESSAGE);
  