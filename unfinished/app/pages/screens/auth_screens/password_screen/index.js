import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styled } from "styled-components/native";

const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: #000000;
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

const TextEmail = styled.Text`
    color: #ffffff;
`;

const PasswordScreen = ({ navigation, route }) => {
    const [password, onChangePassword] = useState("");
    const [passwordConfirm, onChangePasswordConfirm] = useState("");
    const { email } = route.params;
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
                        <Spacer height={"100px"} />
                        <Logo source={require("../../../../../assets/images/icon.png")} />
                        <Spacer height={"18px"} />
                        <SubTitle>You're doing amazing;</SubTitle>
                        <Spacer height={"50px"} />
                        <Margin>
                            <TextEmail>Create a password for {email ? email : "this email address"}</TextEmail>
                            <Spacer height={"10px"}></Spacer>
                            <EmailInput
                                onChangeText={onChangePassword}
                                value={password}
                                placeholder={"Enter your password"}
                                placeholderTextColor={"#00000090"}
                                secureTextEntry={true}
                            />
                            <Spacer height={"10px"} />
                            <EmailInput
                                onChangeText={onChangePasswordConfirm}
                                value={passwordConfirm}
                                placeholder={"Confirm password"}
                                placeholderTextColor={"#00000090"}
                                secureTextEntry={true}
                            />
                            <Spacer height={"20px"} />
                            <Button
                                onPress={() => {
                                    navigation.navigate("Concerns", {
                                        email: email,
                                        password: password
                                    });
                                }}
                            >
                                <ButtonText>Verify;</ButtonText>
                            </Button>
                        </Margin>
                    </Container>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default PasswordScreen;
