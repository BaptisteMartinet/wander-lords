import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home as HomeIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
} from '@tamagui/lucide-icons';
import { Map, Clan, Settings } from './screens';

export type RootTabParamList = {
  Map: undefined;
  Clan: undefined;
  Settings: undefined;
};

// eslint-disable-next-line prettier/prettier
export type ScreenProps<T extends keyof RootTabParamList> = BottomTabScreenProps<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Map">
        <Tab.Screen name="Map" component={Map} options={{ tabBarIcon: (props) => <HomeIcon /> }} />
        <Tab.Screen
          name="Clan"
          component={Clan}
          options={{ tabBarIcon: (props) => <GroupIcon /> }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ tabBarIcon: (props) => <SettingsIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
