import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenHome from './ScreenHome';
import Bills from './Bills';
import Donation from './Donation';
// import CameraScreen from './CameraScreen';
import CommunityScreen from './CommunityScreen';
import { SvgXml } from 'react-native-svg';


const Tab = createBottomTabNavigator();


const TabbedScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'orange',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName =
              '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path style="stroke:none;" d="M0 0h24v24H0z" fill="none"/><path style="stroke:none;" d="M5 12l-2 0l9 -9l9 9l-2 0" /><path style="stroke:none;" d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path style="stroke:none;" d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>';
          } else if (route.name === 'Community') {
            iconName =
              '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path style="stroke:none;" d="M0 0h24v24H0z" fill="none"/><path style="stroke:none;" d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" /><path style="stroke:none;" d="M13 7l0 .01" /><path style="stroke:none;" d="M17 7l0 .01" /><path style="stroke:none;" d="M17 11l0 .01" /><path style="stroke:none;" d="M17 15l0 .01" /></svg>';
          } else if (route.name === 'Bills') {
            iconName =
              '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-receipt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path style="stroke:none;" d="M0 0h24v24H0z" fill="none"/><path style="stroke:none;" d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg>';
          } else if (route.name === 'Donation') {
            iconName =
              '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path style="stroke:none;" d="M0 0h24v24H0z" fill="none"/><path style="stroke:none;" d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" /><path style="stroke:none;" d="M13 7l0 .01" /><path style="stroke:none;" d="M17 7l0 .01" /><path style="stroke:none;" d="M17 11l0 .01" /><path style="stroke:none;" d="M17 15l0 .01" /></svg>';
          }

          return <SvgXml xml={iconName} width={size} height={size} fill={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Bills" component={Bills} />
      {/* <Tab.Screen name='Settings' component={Donation} /> */}
    </Tab.Navigator>
  );
};


export default TabbedScreens;