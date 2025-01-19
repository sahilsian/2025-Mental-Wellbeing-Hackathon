import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styled } from "styled-components/native";

const Container = styled.View`
    width: 100%;
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

const EmailInput = styled.TextInput`
    width: 100%;
    padding: 24px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
`;

const EmailScreen = ({ navigation }) => {
    const [email, onChangeEmail] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, width: "100%", backgroundColor: "#000000" }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Container>
                        <Logo source={require("../../../../../assets/images/icon.png")} />
                        <Title>Unfinished;</Title>
                        <Spacer height={"18px"} />
                        <SubTitle>Healing is a Spectrum</SubTitle>
                        <Spacer height={"200px"} />

                        <Margin>
                            <EmailInput
                                onChangeText={onChangeEmail}
                                value={email}
                                placeholder={"Enter your email"}
                                placeholderTextColor={"#00000090"}
                            />
                            <Spacer height={"10px"} />
                            <Button
                                onPress={() => {
                                    navigation.navigate("Password", {
                                        email: email,
                                    });
                                }}
                            >
                                <ButtonText>Next;</ButtonText>
                            </Button>
                        </Margin>
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default EmailScreen;
