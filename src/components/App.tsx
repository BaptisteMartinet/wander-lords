import { useColorScheme } from 'react-native';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../../tamagui.config';
import Navigator from './Navigator';

function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme}>
        <Navigator />
        <StatusBar />
      </Theme>
    </TamaguiProvider>
  );
}

export default registerRootComponent(App);
