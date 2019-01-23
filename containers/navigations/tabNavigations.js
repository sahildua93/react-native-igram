import React, {Component} from 'react';
import { Text, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../dashboard';
import Search from '../search';
import Profile from '../profile';

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Search: Search,
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
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel: false,
      lazy: true,
      style: {
        backgroundColor: '#EEEEEE',
        borderTopColor: '#000000',
        borderTopWidth: 0.5
      }
    },
  }
);

export default createAppContainer(TabNavigator);