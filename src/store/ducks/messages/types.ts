/**
 * Action types
 */
export enum MessagesTypes {
  SET_MESSAGE = '@messages/SET_MESSAGE',
  GET_MESSAGE = '@messages/GET_MESSAGE',
}

/**
 * Data types
 */
export interface Message {
  body: string,
  time: number
}

/**
 * State type
 */
export interface MessagesState {
  messages: Message[],
  data: Message[]
}
