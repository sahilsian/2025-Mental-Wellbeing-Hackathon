import { useEffect } from "react";
import { Text } from "react-native";

const Start = () => {
    useEffect(() => {
        console.log("Hello World")
    }, []);
    return (
        <><Text>Hello World!</Text></>
    );
}

export default Start