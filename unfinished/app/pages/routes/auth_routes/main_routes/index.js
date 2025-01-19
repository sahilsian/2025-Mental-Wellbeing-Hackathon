import { createStackNavigator } from '@react-navigation/stack';
import Start from '../../../screens/auth_screens/start';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start" component={Start} />
        </Stack.Navigator>
    );
}

export default AuthRoutes