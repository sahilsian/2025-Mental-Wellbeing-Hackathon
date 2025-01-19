import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../../../screens/auth_screens/start_screen';
import LoginScreen from '../../../screens/auth_screens/login_screen';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
            name="Start" 
            component={StartScreen} />
            <Stack.Screen 
            name="Login" 
            component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthRoutes