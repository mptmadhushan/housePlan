/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { useSelector } from 'react-redux';

import Home from '../../screens/Home';
import ItemsScreen from '../../screens/HomeDetails';
import Profile from '../../screens/Profile';
import Location from '../../screens/House3D';
import Estimate from '../../screens/Estimate';

import { COLORS, icons } from '../../constants';
import { ScreenNames } from '../MainNavigator';
import { TabBarCustomButton, CustomTabBar, TabBarIcon } from './Components';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  const cartItems = useSelector(state => state.cartItems.value);

  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconSource={icons.homeTab} />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Screen
        name={ScreenNames.ItemsScreen}
        component={ItemsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <View
                style={{
                  position: 'absolute',
                  height: 15,
                  width: 15,
                  borderRadius: 15,
                  backgroundColor: COLORS.black,
                  left: 20,
                  bottom: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2000,
                }}>
                <Text style={{ color: 'white', fontSize: 10 }}>
                  {cartItems.length}
                </Text>
              </View>
              <TabBarIcon focused={focused} iconSource={icons.task} />
            </View>
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Screen
        name={ScreenNames.Location}
        component={Location}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconSource={icons.house} />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Screen
        name={ScreenNames.Estimate}
        component={Estimate}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconSource={icons.estimate} />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Screen
        name={ScreenNames.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} iconSource={icons.user} />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Navigator>
  );
};

export default Tabs;
