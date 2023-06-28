import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home as HomeIcon, Group as GroupIcon } from '@tamagui/lucide-icons';
import { Home, Clan } from './screens';

export type RootTabParamList = {
  Home: undefined;
  Clan: undefined;
};

// eslint-disable-next-line prettier/prettier
export type ScreenProps<T extends keyof RootTabParamList> = BottomTabScreenProps<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: (props) => <HomeIcon /> }}
        />
        <Tab.Screen
          name="Clan"
          component={Clan}
          options={{ tabBarIcon: (props) => <GroupIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
