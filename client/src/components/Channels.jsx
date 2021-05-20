import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import '../App.css';

import MessageContainer from './MessageContainer';

const Channels = () => {
  const channelsActions = useStoreActions(actions => actions.channels);
  const channelsStore = useStoreState(state => state.channels);
  const { channels, isLoading, selectedChannel } = channelsStore;
  const { get, setSelectedChannel, onNewMessageChange } = channelsActions;
  useEffect(() => {
    get();
  }, [selectedChannel]);

  const handleClick = (channel) => {
    onNewMessageChange('');
    setSelectedChannel(channel)
  }

  return (
    <div className="app-container">
      <div className="channel-container">
        <h5 className="channel-header">Channels</h5>
        {!!isLoading && !!channels.length ?
          'Channels Loading...' :
          Object.keys(channels).map(channel => {
            return <p className="channel" key={channel} onClick={() => handleClick(channel)}>{channel}</p>
          })
        }
      </div>
      <MessageContainer channel={selectedChannel} />
    </div>
  )
}

export default Channels;
