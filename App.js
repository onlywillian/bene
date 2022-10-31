import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Pesquisa from './screens/Pesquisa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
        <Stack.Screen name='Pesquisa' component={Pesquisa} options={{ headerShown: false, statusBarStyle: 'dark' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}