import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenHome from './ScreenHome';
import Bills from './Bills';
import Donation from './Donation';
// import CameraScreen from './CameraScreen';
import CommunityScreen from './CommunityScreen';


const Tab = createBottomTabNavigator();


const TabbedScreens = () => {
    return (
      <Tab.Navigator >
        <Tab.Screen name="Home" component={ScreenHome} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Bills" component={Bills} />
        <Tab.Screen name='Donation' component={Donation} />
      </Tab.Navigator>
    )
}


export default TabbedScreens;