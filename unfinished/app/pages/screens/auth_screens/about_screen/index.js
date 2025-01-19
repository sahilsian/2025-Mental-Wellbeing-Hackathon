import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styled } from "styled-components/native";

const Container = styled.View`
    width: 100%;
    flex: 1;
    background-color: #000000;
    padding: 20px;
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
    color: #FFFFFF;
    font-size: 18px;
`;

const AnonMsg = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
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
    color:rgba(255, 255, 255, 0.61);
`;

const Margin = styled.View`
    width: 100%;
`;

const EmailInput = styled.TextInput`
    width: 100%;
    padding: 24px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
`;

const DescriptionInput = styled.TextInput`
    width: 100%;
    padding: 24px;
    height: 100px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
`;


const TextEmail = styled.Text`
    color: #ffffff;
`;

const Border = styled.View`
    width: 100%;
    background-color:rgba(255, 255, 255, 0.38);
    height: 1px;
`;

const TouchableAnonyminity = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background-color: ${props=>props.bgColor ? "#8AC7FC" : "#FFFFFF"};
    border-radius: 5px;
`;

const FlexRow = styled.View`
    flex-direction: row;
    gap: 20px;
    align-items: center;
`;

const AboutScreen = ({ navigation, route}) => {
    const [anonymous, setAnonymous] = useState(false)
    const [fullName, onChangeFullName] = useState("");
    const [dateOfBirth, onChangeDateOfBirth] = useState("");

    const { email, password, emotionalSymptoms, physicalSymptoms, description } = route.params;
    
    return (
        <>
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
                            <Title>Tell us about yourself</Title>
                            <Spacer height={"8px"} />
                            <SubTitle>Let us know some information about you.</SubTitle>
                            <Spacer height={"30px"} />
                            <Margin>
                                <FlexRow>
                                    <TouchableAnonyminity
                                    bgColor={anonymous} onPress={()=> {
                                        setAnonymous(!anonymous)
                                    }}></TouchableAnonyminity>
                                    <AnonMsg>I would like to remain anonymous</AnonMsg>
                                </FlexRow>
                                <Spacer height={"30px"} />
                                <Border></Border>
                                <Spacer height={"30px"} />
                                
                                {!anonymous && <>
                                
                                <EmailInput
                                    onChangeText={onChangeFullName}
                                    value={fullName}
                                    placeholder={"Full Name"}
                                    placeholderTextColor={"#00000090"}
                                />
                                
                                <Spacer height={"20px"} />
                                <EmailInput
                                    onChangeText={onChangeDateOfBirth}
                                    value={dateOfBirth}
                                    placeholder={"Date Of Birth"}
                                    placeholderTextColor={"#00000090"}
                                />
                                
                                <Spacer height={"20px"} />
                                </>
                                }
                                <Button
                                    onPress={() => {
                                        navigation.navigate("Confirmation", {
                                            email: email,
                                            password: password,
                                            emotionalSymptoms: emotionalSymptoms,
                                            physicalSymptoms: physicalSymptoms,
                                            description: description,
                                            fullName: fullName,
                                            dateOfBirth: dateOfBirth
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
        </>
    )
}

export default AboutScreen