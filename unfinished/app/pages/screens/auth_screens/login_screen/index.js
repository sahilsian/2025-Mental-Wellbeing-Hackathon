import { styled } from "styled-components/native";

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

const SubTitle = styled.Text`
    fontFamily: InriaSerif-Regular;
    color: #FFFFFF;
    font-size: 18px;
`;

const Spacer = styled.View`
    height: ${props => props.height && props.height};
`;

const Button = styled.TouchableOpacity`
    background-color: #8AC7FC;
    padding: 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
`;

const ButtonText = styled.Text`
    color: #000000;
`;

const Disclaimer = styled.Text`
    color: #FFFFFF70;
    text-align: center;

`;

const Margin = styled.View`
    width: 100%;
    max-width: 370px;
`;

const LoginScreen = ({ navigation }) => {
    return (
        <>
            <Container>
                <Logo
                    source={require("../../../../../assets/images/icon.png")}
                >
                </Logo>
                <Title>Unfinished;</Title>
                <Spacer height={"18x"}></Spacer>
                <SubTitle>Healing is a Spectrum</SubTitle>
                <Spacer height={"70px"}></Spacer>
                
                <Margin>
                    <Button onPress={()=> {
                        navigation.navigate("Email")
                    }}><ButtonText>Get Started;</ButtonText></Button>
                    <Spacer height={"15px"}></Spacer>
                    <Disclaimer>
                    By tapping “Get Started”, you agree to our terms and conditions.
                    </Disclaimer>
                </Margin>
                

            </Container>
        </>
    )
}

export default LoginScreen