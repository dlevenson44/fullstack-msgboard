import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Messages = ({ channel }) => {
  const getMessages = useStoreActions(actions => actions.channels.fetchMessages);
  const channelsStore = useStoreState(state => state.channels);
  useEffect(() => {
    getMessages(channel);
  }, []);
  const { isLoading, messages } = channelsStore;
  return (
    !!isLoading && <p>Messages Loading....</p>,
    (!isLoading && !messages.length) && <p>There are no messages in this channel!</p>
  );
}

export default Messages;
