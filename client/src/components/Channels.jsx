import { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import MessageContainer from './MessageContainer';

const Channels = () => {
  const getChannels = useStoreActions(actions => actions.channels.get);
  const channelsStore = useStoreState(state => state.channels);
  const [selectedChannel, setSelectedChannel] = useState(null)
  useEffect(() => {
    getChannels();
  }, []);

  const channelSelected = name => setSelectedChannel(name);
  const { channels, isLoading} = channelsStore;

  return (
    <div>
      {!!isLoading && !!channels.length ?
        'Channels Loading...' :
        Object.keys(channels).map(channel => {
          return <p key={channel} onClick={() => channelSelected(channel)}>{channel}</p>
        })
      }
      <MessageContainer channel={selectedChannel} />
    </div>
  )
}

export default Channels;
