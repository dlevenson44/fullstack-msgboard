import { StoreProvider } from 'easy-peasy';
import { Container } from '@material-ui/core';
import store from './store/rootStore';
import Channels from './components/Channels';

function App() {
  return (
    <StoreProvider store={store}>
      <Container className="app-container">
        <Channels />
      </Container>
    </StoreProvider>
  );
}

export default App;
