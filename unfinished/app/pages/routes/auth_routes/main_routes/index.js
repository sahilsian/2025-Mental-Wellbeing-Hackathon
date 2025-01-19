import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../../../screens/auth_screens/start_screen';
import LoginScreen from '../../../screens/auth_screens/login_screen';
import EmailScreen from '../../../screens/auth_screens/email_screen';
import PasswordScreen from '../../../screens/auth_screens/password_screen';
import ConcernScreen from '../../../screens/auth_screens/concerns_screen';
import AboutScreen from '../../../screens/auth_screens/about_screen';
import ConfirmationScreen from '../../../screens/auth_screens/confirmation_screen';

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
            <Stack.Screen 
            name="Email" 
            component={EmailScreen} />
            <Stack.Screen 
            name="Password" 
            component={PasswordScreen} />
            <Stack.Screen 
            name="Concerns" 
            component={ConcernScreen} />
            <Stack.Screen 
            name="About" 
            component={AboutScreen} />
            <Stack.Screen 
            name="Confirmation" 
            component={ConfirmationScreen} />
        </Stack.Navigator>
    );
}

export default AuthRoutes