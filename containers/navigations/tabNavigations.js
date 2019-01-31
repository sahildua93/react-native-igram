import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Home from '../dashboard';
import Search from '../search';
import Profile from '../profile';

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Search: { screen: Search, },
    Profile: { screen: props => <Profile { ...props } /> },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = IonIcons;
        let iconName;
        switch(routeName) {
          case 'Home': iconName = 'md-home';
            break;
          case 'Search': iconName = 'md-search';
            break;
          case 'Profile': iconName = 'md-person';
        }
        return <IconComponent name={ iconName } size={25} color={ tintColor } />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false,
      lazy: true,
      style: {
        backgroundColor: '#eeeeee',
        borderTopColor: '#000000',
        borderTopWidth: 0.5
      }
    },
  }
);

export default TabNavigator;