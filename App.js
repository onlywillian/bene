import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { Alert } from 'react-native';

// Error handling
const handleError = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
        'Unexpected error occurred',
        `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
        `
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler((error, isFatal) => {
  console.log('caught global error');
  handleError(error, isFatal);
}, true);

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
