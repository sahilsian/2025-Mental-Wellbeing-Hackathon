import { useContext, useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, Text } from "react-native"
import { Context } from "../../../helpers/context/context";
import AuthRoutes from "./auth_routes/main_routes";
import AppRoutes from "./app_routes/main_routes";
import { UserExample } from "../../../constants/user";

SplashScreen.preventAutoHideAsync();


const Routes = () => {
    const [loading, setLoading] = useState(false);
    const {
        user,
        setUser
    } = useContext(Context);

    const [loaded, error] = useFonts({
        'InriaSerif-Bold': require('../../../assets/fonts/InriaSerif-Bold.ttf'),
        'InriaSerif-BoldItalic': require('../../../assets/fonts/InriaSerif-BoldItalic.ttf'),
        'InriaSerif-Italic': require('../../../assets/fonts/InriaSerif-Italic.ttf'),
        'InriaSerif-Light': require('../../../assets/fonts/InriaSerif-Light.ttf'),
        'InriaSerif-LightItalic': require('../../../assets/fonts/InriaSerif-LightItalic.ttf'),
        'InriaSerif-Regular': require('../../../assets/fonts/InriaSerif-Regular.ttf'),
    });

    useEffect(() => {
        setUser(UserExample)
        
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    if (loading) {
        return (
            <Text>Loading</Text>
        )
    }
    return (
        <>
            <StatusBar>
            </StatusBar>
            {!!user ?
                <AppRoutes></AppRoutes>
                :
                <AuthRoutes></AuthRoutes>
            }
        </>
    )
}

export default Routes