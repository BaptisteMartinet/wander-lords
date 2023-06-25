import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { Home } from './screens';

function App() {
  return (
    <>
      <Home />
      <StatusBar />
    </>
  );
}

export default registerRootComponent(App);
