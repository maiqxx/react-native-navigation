import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Account from './ProfileTabs/Account'
import Transactions from './ProfileTabs/Transactions'
import Reports from './ProfileTabs/Reports'

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    //Top Tab Navigator
    <Tab.Navigator>
        <Tab.Screen 
        name="Account" 
        component={Account} 
        screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },

          }}
          />

        <Tab.Screen 
        name="Transactions" 
        component={Transactions} 
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'powderblue' },
          }}
        />

        <Tab.Screen 
        name="Reports" 
        component={Reports}
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'powderblue' },
          }}
           />
    </Tab.Navigator>

  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });