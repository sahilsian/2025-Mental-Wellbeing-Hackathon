import { useContext } from "react"
import { Button, Text } from "react-native"
import { Context } from "../../../../../helpers/context/context"

const HomeScreen = () => {
    const { setUser } = useContext(Context)

    return (
        <>
            <Text>App: Hello World</Text>
            <Button title="Logout" onPress={() => {
                setUser(null)
            }}></Button>
        </>
    )
}

export default HomeScreen