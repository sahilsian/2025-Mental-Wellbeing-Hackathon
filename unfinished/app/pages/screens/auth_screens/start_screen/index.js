import { useContext, useEffect } from "react";
import { Button, Text } from "react-native";
import { Context } from "../../../../../helpers/context/context";

const StartScreen = () => {
    const { setUser } = useContext(Context)

    return (
        <>
            <Text>Auth: Hello World!</Text>
            <Button title="Login" onPress={() => {
                setUser("USERNAME")
            }}></Button>
        </>
    );
}

export default StartScreen