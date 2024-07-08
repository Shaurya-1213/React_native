import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import Signup from '../screens/Signup';
import AboutScreen from '../screens/AboutScreen';
import LoginScreen from '../screens/LoginScreen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTab = ({ route , index }) =>{

  const icons={
    Home: 'home',
    Signup: 'account-plus',
    Login: 'login',
    About: 'information-outline',
  }

  return (<TouchableOpacity style={tabStyles.container}>
    <MaterialIcon name={icons[route.name]} size={30} color='black' />
    <Text>{route.name}</Text>
    </TouchableOpacity>
  )
} 

  const tabStyles = StyleSheet.create({
    container:{
      padding:20,
    }
  })

const MyCustomNavbar = ({ state, descriptors, navigation }) => {
  
     return <View style={tabBarStyles.container}>
      {
        state.routes.map((route, index) => {
          return <CustomTab route={route} index={index} key={route.key} />
        })
        
}
        </View>
}

const tabBarStyles = StyleSheet.create({
 container:{
  flexDirection: 'row',
  justifyContent: 'space-around',
 }
})

const BottomTabsNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator tabBar={(props) => <MyCustomNavbar {...props} />}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Signup' component={Signup} />
        <Tab.Screen name='Login' component={LoginScreen} />
        <Tab.Screen name='About' component={AboutScreen} />
      </Tab.Navigator>
    </>
  )
}

export default BottomTabsNavigator;