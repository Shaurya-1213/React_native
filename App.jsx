import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './component/StackNavigator';
import BottomTabsNavigator from './component/BottomTabsNavigator';



export default function App() {
  return (
    <NavigationContainer>
     {/* <StackNavigator/> */}
     <BottomTabsNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});