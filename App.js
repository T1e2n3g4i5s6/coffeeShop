import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screen/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MyStack from './src/navigators/stack';
import ProfileScreen from './src/screen/profile';
import ScanScreen from './src/screen/scan';
import OrderScreen from './src/screen/order';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack/> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home-outline' color={color} size={size} />
          ),
        }} />
          <Tab.Screen name="Scan" component={ScanScreen} options={{
            tabBarLabel: 'Scan',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='line-scan' color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Order" component={OrderScreen} options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='cart-variant' color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account-outline' color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
export default App;