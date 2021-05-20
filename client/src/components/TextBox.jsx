import { useStoreActions, useStoreState } from 'easy-peasy';

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
      <input
        placeholder="Enter Message Here"
        value={newMessage}
        onChange={(e) => onNewMessageChange(e.target.value)}
      />
      <button
        onClick={() => handleClick()}
        disabled={!newMessage.length}
      >
          Submit
      </button>
    </div>
  );
}

export default TextBox;
