import { StoreProvider } from 'easy-peasy';
import store from './store/rootStore';
import Channels from './components/Channels';

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Channels />
      </div>
    </StoreProvider>
  );
}

export default App;
