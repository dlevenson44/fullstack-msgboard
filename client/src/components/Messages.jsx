import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Messages = ({ channel }) => {
  const getMessages = useStoreActions(actions => actions.channels.fetchMessages);
  const channelsStore = useStoreState(state => state.channels);
  const { messages } = channelsStore;
  useEffect(() => {
    getMessages(channel);
  }, [channel]);

  return (
    <div className="messages-container">
      {!messages.length && <p>No messages on this channel.</p>}
      {!!messages.length && messages.map(message => (
        <p key={message}>{message}</p>
      ))}
    </div>
  );
}

export default Messages;
