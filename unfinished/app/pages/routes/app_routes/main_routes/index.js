import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../screens/app_screens/home_screen';
import ChatScreen from '../../../screens/app_screens/chat_screen';
import BottomNavRoutes from '../nav_routes';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName="Main"
        >
            <Stack.Screen options={{headerShown: false}} name="Main" component={BottomNavRoutes} />

            <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default AppRoutes