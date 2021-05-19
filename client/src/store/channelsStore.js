import { thunk, action } from 'easy-peasy';

const channels = {
  isLoading: false,
  channels: [],
  messages: [],
  get: thunk(async (actions, payload) => {
    actions.startFetch();

    fetch('/channels')
      .then(res => res.json())
      .then(data => {
        actions.successfulChannelFetch(data.channels)
      })
  }),
  fetchMessages: thunk(async (actions, payload) => {
    actions.startFetch();

    fetch(`/messages/${payload}`)
      .then(res => res.json())
      .then(data => {
        actions.successfulMessagesFetch(data.messages);
      })
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
  })
};

export default channels;
