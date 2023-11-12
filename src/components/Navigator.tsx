import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Store as StoreIcon,
  UserCircle as UserCircleIcon,
  Map as MapIcon,
  Group as GroupIcon,
  ListOrdered as ListOrderedIcon,
} from '@tamagui/lucide-icons';
import { Store, Profile, Map, Clan, Leaderboard } from './screens';

export type RootTabParamList = {
  Store: undefined;
  Profile: undefined;
  Map: undefined;
  Clan: undefined;
  Leaderboard: undefined;
};

// eslint-disable-next-line prettier/prettier
export type ScreenProps<T extends keyof RootTabParamList> = BottomTabScreenProps<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Map">
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            tabBarIcon: (props) => <StoreIcon />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: (props) => <UserCircleIcon />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: (props) => <MapIcon />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Clan"
          component={Clan}
          options={{ tabBarIcon: (props) => <GroupIcon /> }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{ tabBarIcon: (props) => <ListOrderedIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
