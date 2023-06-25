import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Clan } from './screens';

export type RootStackParamList = {
  Home: undefined;
  Clan: undefined;
};

// eslint-disable-next-line prettier/prettier
export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Clan" component={Clan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
