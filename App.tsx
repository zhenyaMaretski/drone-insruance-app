import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Details: { location: { latitude: number; longitude: number } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: true, title: 'Home' }} 
      />
      <Stack.Screen 
        name="Map" 
        component={MapScreen} 
        options={{ headerShown: true, title: 'Map' }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ headerShown: true, title: 'Details' }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
