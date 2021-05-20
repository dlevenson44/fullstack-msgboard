import { thunk, action } from 'easy-peasy';

const channels = {
  isLoading: false,
  channels: [],
  messages: [],
  newMessage: '',
  onNewMessageChange: action((state, payload) => {
    state.newMessage = payload;
  }),
  postMessage: thunk(async (actions, payload) => {
    const { channel, newMessage } = payload;
    actions.startFetch();

    fetch(`/${channel}`, {
      method: 'POST',
      body: JSON.stringify({ message: newMessage }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => actions.successfulMessagePost(data.messages));
  }),
  selectedChannel: null,
  setSelectedChannel: action((state, payload) => {
    state.selectedChannel = payload;
  }),
  get: thunk(async (actions, payload) => {
    actions.startFetch();

    fetch('/channels')
      .then(res => res.json())
      .then(data => actions.successfulChannelFetch(data.channels));
  }),
  fetchMessages: thunk(async (actions, payload) => {
    actions.startFetch();

    fetch(`/messages/${payload}`)
      .then(res => res.json())
      .then(data => actions.successfulMessagesFetch(data.messages));
  }),
  startFetch: action(state => {
    state.isLoading = true;
  }),
  successfulChannelFetch: action((state, payload) => {
    state.isLoading = false;
    state.channels = payload;
  }),
  successfulMessagesFetch: action((state, payload) => {
    state.isLoading = false;
    state.messages = payload;
  }),
  successfulMessagePost: action((state, payload) => {
    state.isLoading = false;
    state.messages = payload;
  })
};

export default channels;
