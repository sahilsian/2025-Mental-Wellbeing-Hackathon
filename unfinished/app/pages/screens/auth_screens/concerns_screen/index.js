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


const ConcernScreen = ({navigation, route}) => {
    const [emotionalSymptoms, onChangeEmotionalSymptoms] = useState("");
    const [physicalSymptoms, onChangePhysicalSymptoms] = useState("");
    
    const [description, onChangeDescription] = useState("")
    const { email, password } = route.params;
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
                        <Title>What are your Concerns?</Title>
                        <Spacer height={"8px"} />
                        <SubTitle>Describe what you're feeling.</SubTitle>
                        <Spacer height={"50px"} />
                        <Margin>
                            
                            <Spacer height={"10px"}></Spacer>
                            <EmailInput
                                onChangeText={onChangeEmotionalSymptoms}
                                value={emotionalSymptoms}
                                placeholder={"Emotional Symptoms"}
                                placeholderTextColor={"#00000090"}
                            />
                            <Spacer height={"5px"} />
                            <Disclaimer>What are emotional symptoms?</Disclaimer>
                            <Spacer height={"20px"} />
                            <EmailInput
                                onChangeText={onChangePhysicalSymptoms}
                                value={physicalSymptoms}
                                placeholder={"Physical Symptoms"}
                                placeholderTextColor={"#00000090"}
                            />
                            <Spacer height={"5px"} />
                            <Disclaimer>What are emotional symptoms?</Disclaimer>
                            <Spacer height={"20px"} />
                            <DescriptionInput
                                editable
                                multiline
                                numberOfLines={8}
                                onChangeText={onChangeDescription}
                                value={description}
                                placeholder={"Tell us what you’re struggling with"}
                                placeholderTextColor={"#00000090"}
                            />
                            <Spacer height={"20px"} />
                            <Button
                                onPress={() => {
                                    navigation.navigate("About", {
                                        email: email,
                                        password: password,
                                        emotionalSymptoms: emotionalSymptoms,
                                        physicalSymptoms: physicalSymptoms,
                                        description: description
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
    )
}

export default ConcernScreen