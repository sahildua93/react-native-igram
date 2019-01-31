import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabNavigator from './tabNavigations';
import DetailPage from '../detailPage';

const StackNavigator =  createStackNavigator(
  { TabNavigator, DetailPage: DetailPage },
  {
    defaultNavigationOptions: {
      headerLeft: ({ scene }) => {
        return (
          scene.route.index === 1 &&
          <IonIcons
            name={'md-arrow-round-back'}
            style={{ marginLeft: 20, paddingTop: 5 }}
            size={25}
            color={'#000000'}
          />
        );
      },
      headerRight: <Fragment />,
      headerStyle: {
        backgroundColor: '#eeeeee',
      },
      headerTitle: <Text style={{
          color: '#000000',
          textAlign: 'center',
          fontFamily: 'cursive',
          flex: 1,
          fontSize: 28,
          fontWeight: 'bold',
      }}>
        Igram
      </Text>
    },
  }
);

export default createAppContainer(StackNavigator);
