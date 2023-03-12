import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Pesquisa from './screens/Pesquisa';
import Detalhes from './screens/Detalhes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, statusBarStyle: 'light', statusBarColor: '#00D264' }}/>
        <Stack.Screen name='Pesquisa' component={Pesquisa} options={{ headerShown: false, statusBarStyle: 'light', statusBarColor: '#00D264' }}/>
        <Stack.Screen name='Detalhes' component={Detalhes} options={{ headerShown: false, statusBarStyle: 'light', statusBarColor: '#00D264' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
