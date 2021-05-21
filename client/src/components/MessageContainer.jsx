import PropTypes from 'prop-types';
import Messages from './Messages';
import TextBox from './TextBox';

const MessageContainer = ({ channel }) => {
  return (
    !channel ?
      <p>No channel selected.  Click on a channel to view its messages.</p> :
      (<div>
        <p>{channel} channel is currently selected</p>
        <Messages channel={channel} />
        <TextBox channel={channel} />
      </div>)
  );
}

MessageContainer.propTypes = { channel: PropTypes.string };
MessageContainer.defaultProps = { channel: '' };

export default MessageContainer;
