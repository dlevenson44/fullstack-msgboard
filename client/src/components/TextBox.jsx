import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextBox = ({ channel }) => {
  const channelsActions = useStoreActions(actions => actions.channels);
  const channelsStore = useStoreState(state => state.channels);
  const { onNewMessageChange, postMessage } = channelsActions;
  const { newMessage } = channelsStore;

  const handleClick = () => {
    postMessage({ channel, newMessage });
    onNewMessageChange('');
  }

  return (
    <div>
      <TextField
        className="msg-field"
        variant="outlined"
        placeholder="Enter Message Here"
        value={newMessage}
        onChange={(e) => onNewMessageChange(e.target.value)}
      />
      <Button
        className="submit-btn"
        variant="contained"
        color="primary"
        onClick={() => handleClick()}
        disabled={!newMessage.length}
      >
          Submit
      </Button>
    </div>
  );
}

TextBox.propTypes = { channel: PropTypes.string.isRequired };

export default TextBox;
