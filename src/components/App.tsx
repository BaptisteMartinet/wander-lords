import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Navigator from './Navigator';

function App() {
  return (
    <>
      <Navigator />
      <StatusBar />
    </>
  );
}

export default registerRootComponent(App);
