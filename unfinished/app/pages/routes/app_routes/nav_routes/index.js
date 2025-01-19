import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../../screens/app_screens/home_screen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Nav = createBottomTabNavigator();

const BottomNavRoutes = () => {
    return (
        <Nav.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarActiveTintColor: "#8AC7FC",
                tabBarStyle: {
                    backgroundColor: "#000000", 
                    borderTopWidth: 0, 
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                },
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    //Current Page = Home
                    if (route.name === "Home") {
                        iconName = focused
                            ? 'chatbubble'
                            : 'chatbubble-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>

                },
            })}
        >
            <Nav.Screen
                name={"Home"}
                component={HomeScreen}
            />
        </Nav.Navigator>
    );
};

export default BottomNavRoutes;
