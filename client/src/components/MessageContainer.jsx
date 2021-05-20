import Messages from './Messages';
import TextBox from './TextBox';

const MessageContainer = ({ channel }) => {
  return (
    !channel ?
      // <div><p className="no-messages">No channel selected.  Click on a channel to view its messages.</p></div> :
      <p>No channel selected.  Click on a channel to view its messages.</p> :
      (<div>
        <p>{channel} channel is currently selected</p>
        <Messages channel={channel} />
        <TextBox channel={channel} />
      </div>)
  );
}

export default MessageContainer;
