import { useContext, useEffect, useState } from "react";
import { StatusBar, Text } from "react-native"
import { Context } from "../../../helpers/context/context";
import AuthRoutes from "./auth_routes/main_routes";

const Routes = () => {
    const [loading, setLoading] = useState(true);

    const {
        user
    } = useContext(Context);

    useEffect(() => {
        setLoading(false)
    }, []);

    if (loading) {
        return (
            <Text>Loading</Text>
        )
    }
    return (
        <>
            <StatusBar>
                {user ?
                    <Text>USER!</Text>
                :
                    <AuthRoutes></AuthRoutes>
                }
            </StatusBar>
        </>
    )
}

export default Routes