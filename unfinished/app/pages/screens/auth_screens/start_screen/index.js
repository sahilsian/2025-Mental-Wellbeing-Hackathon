import { useContext, useEffect } from "react";
import { Button, Text } from "react-native";
import { Context } from "../../../../../helpers/context/context";
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #000000;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: 150px;
    height: 150px;
`;

const Title = styled.Text`
    fontFamily: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 48px;

`;

const ClickAdvisor = styled.Text`
    fontFamily: InriaSerif-Regular;
    color: #FFFFFF;
    font-size: 16px;
`;

const Margin = styled.View`
    justify-content: center;
    align-items: center;
    max-width: 380px;
    gap: 40px;
`;

const Spacer = styled.View`
    height: 100px;
`;

const ClickTarget = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
`;

const StartScreen = ({ navigation }) => {
    const { setUser } = useContext(Context)

    return (
        <>
            {/* <Text>Auth: Hello World!</Text>
            <Button title="Login" onPress={() => {
                setUser("USERNAME")
            }}></Button> */}
            <Container>
                <ClickTarget
                    onPress={()=> {
                        navigation.navigate("Login")
                    }}
                ></ClickTarget>
                <Margin>
                    <Logo
                        source={require("../../../../../assets/images/icon.png")}
                    >
                    </Logo>
                    <Title>Trying is the most important thing you can do;</Title>
                </Margin>
                <Spacer></Spacer>
                <ClickAdvisor>Tap to Continue...</ClickAdvisor>

            </Container>
        </>
    );
}

export default StartScreen