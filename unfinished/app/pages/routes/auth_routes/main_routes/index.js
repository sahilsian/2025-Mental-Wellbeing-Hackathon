import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../../../screens/auth_screens/start_screen';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} />
        </Stack.Navigator>
    );
}

export default AuthRoutes