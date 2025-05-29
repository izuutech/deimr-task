import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FloatingTabBar from './src/components/FloatingTabbar';
import HomeScreen from './src/screens/HomeScreen';
import {
  ClockIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from './src/assets/svgs';
import HomeStack from './src/navigation/HomeStack';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <FloatingTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({color, size}) => <HomeIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Menu"
          component={HomeStack}
          options={{
            tabBarIcon: ({color, size}) => <MenuIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="User"
          component={HomeStack}
          options={{
            tabBarIcon: ({color, size}) => <UserIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
