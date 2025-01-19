import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../screens/app_screens/home_screen';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AppRoutes