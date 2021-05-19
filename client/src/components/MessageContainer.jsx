import Messages from './Messages';
import TextBox from './TextBox';

const MessageContainer = ({ channel }) => {
  return (
    !channel ?
      'No channel selected.  Click on a channel to view its messages.' :
      (<div>
        <p>{channel} channel is currently selected</p>
        <Messages channel={channel} />
        <TextBox />
      </div>)
  );
}

export default MessageContainer;
