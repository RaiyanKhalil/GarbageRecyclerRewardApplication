import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import TabbedScreens from './screens/TabbedScreens';
import WasteScreen from './screens/WasteScreen';
import ElectricityScreen from './screens/ElectricityScreen';
import GasScreen from './screens/GasScreen';
import WaterScreen from './screens/WaterScreen';
import CameraScreen from './screens/CameraScreen';
import ScreenHome from './screens/ScreenHome';

const Stack = createNativeStackNavigator();

function App() {

  // AsyncStorage.clear();




  useEffect(() => {



    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('appState');
        if (value !== null && value == 'true') {
          setIsSignedIn(true)
        }
      } catch (e) {
        console.log(e)
      }
    };
    getData();
  }, [])

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
          
            <Stack.Screen name="Main" component={TabbedScreens} options={{ headerShown: false }} />
            <Stack.Screen name="Waste" component={WasteScreen} />
            <Stack.Screen name="Electricity" component={ElectricityScreen} />
            <Stack.Screen name="Gas" component={GasScreen} />
            <Stack.Screen name="Water" component={WaterScreen} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: true }} />
            
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Main" component={TabbedScreens} options={{ headerShown: false }} />
          </>
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;