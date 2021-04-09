import { Reset } from 'styled-reset';
import Routes from './routes';
import UserProvider from './Context/SetUser';


function App() {
  return (
    <UserProvider>
      <Reset />
      <Routes/>
    </UserProvider>
  );
}

export default App;
