import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { List, ListItem, ListItemText } from '@material-ui/core';
import '../App.css';

import MessageContainer from './MessageContainer';

const Channels = () => {
  const channelsActions = useStoreActions(actions => actions.channels);
  const channelsStore = useStoreState(state => state.channels);
  const { channels, isLoading, selectedChannel } = channelsStore;
  const { get, setSelectedChannel, onNewMessageChange } = channelsActions;
  useEffect(() => {
    get();
  }, [selectedChannel, setSelectedChannel, get]);

  const handleClick = (channel) => {
    onNewMessageChange('');
    setSelectedChannel(channel);
  }

  return (
    <div className="app-container">
      <div className="channel-container">
        <h5 className="channel-header">Channels</h5>
        <List>
        {!!isLoading && !!channels.length ?
          'Channels Loading...' :
          Object.keys(channels).map(channel => {
            return (
              <ListItem
                key={channel}
                onClick={() => handleClick(channel)}
                button
                selected={channel === selectedChannel}
              >
                <ListItemText primary={channel} />
              </ListItem>
            );
          })
        }
        </List>
      </div>
      <MessageContainer channel={selectedChannel} />
    </div>
  );
}

export default Channels;
