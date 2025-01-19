import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../screens/app_screens/home_screen';
import ChatScreen from '../../../screens/app_screens/chat_screen';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default AppRoutes