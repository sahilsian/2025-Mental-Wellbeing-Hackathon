import React, { useContext, useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Context } from "../../../../../helpers/context/context";

const Container = styled.View`
    flex: 1;
    background-color: #000000;
    width: 100%;
    align-items: center;
`;

const ContainerText = styled.View`
    background-color: #000000;
    padding: 20px;
`;

const Logo = styled.Image`
    width: 100px;
    height: 100px;
`;

const Spacer = styled.View`
    height: ${props => props.height || "0px"};
`;

const Title = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 32px;
`;

const Loading = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 12px;
`;

const Button = styled.TouchableOpacity`
    background-color: #8AC7FC;
    padding: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
`;

const TextInput = styled.TextInput`
    padding: 24px;
    flex: 1;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 7px;
`;

const FlexRow = styled.View`
    flex-direction: row;
    gap: 10px;
`;

const ButtonText = styled.Text`
    color: #000000;
`;

const RowMessageChat = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: ${props=>props.isUser ? "end" : "start"};
    padding: 10px;
`;

const ChatBubble = styled.View`
    background-color: ${props=>props.isUser ? "#343539" : "#FFFFFF"};
    padding: 20px;
    flex: 1;
`;

const ChatBubbleText = styled.Text`
    color: ${props=>props.isUser ? "#FFFFFF" : "#000000"};
    text-align: ${props=>props.isUser ? "right" : "left"};
`;

const ChatContainer = styled.View`
    width: 100%;
`;


const ChatScreen = () => {

    const [isChatClicked, setIsChatClicked] = useState(false);
    const [chat, onChangeChat] = useState("")

    const { user } = useContext(Context)

    const [chatLog, setChatLog] = useState([])

    const scrollViewRef = useRef(null);

    const sendTextRequest = async (prompt) => {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": `Bearer `,
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            }),
        });
        const data = await response.json();
        console.log(data.choices[0].message)
        return data.choices[0].message;
    };

    const handleSendChat = async () => {
        let chatToSend = chat;

        if(chatLog.length == 0) {
            let message = `
                The user that is chatting to you has sent this message: ${chatToSend}

                The user is also experiencing physical symptoms: ${user.physicalSymptoms}.

                The user is also experiecing emotional symptoms: ${user.emotionalSymptoms}

                The user is also experiencing this description: ${user.description}

                the users date of birth is ${user.dateOfBirth}

            `

            chatToSend = message;
        }
        setIsChatClicked(true)
        onChangeChat("")
        setChatLog((prevChats) => [...prevChats, {user: chat}])

        const response = await sendTextRequest(chatToSend);

        setChatLog((prevChats) => [...prevChats, {AI: response.content}])
        setIsChatClicked(false)
    }

    useEffect(() => {
        console.log(chatLog);
        scrollViewRef.current?.scrollToEnd({ animated: true });
    
    }, [isChatClicked]);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "#000000", width: "100%" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Container>
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                    }}
                    ref={scrollViewRef}
                >
                    <Spacer height="100px" />
                    <Logo source={require("../../../../../assets/images/icon.png")} />
                    <Spacer height="10px" />
                    <Title>Start a Chat</Title>
                    <Spacer height="10px"></Spacer>
                    <ChatContainer>

                    {isChatClicked && <Loading>Loading</Loading>}

                    {chatLog.map((chat) => {
                        if("user" in chat) {
                            return (
                                <RowMessageChat isUser>
                                    <ChatBubble isUser>
                                        <ChatBubbleText isUser>
                                            {chat.user}
                                        </ChatBubbleText>
                                    </ChatBubble>
                                </RowMessageChat>
                            )
                        }

                        if("AI" in chat) {

                            return (
                                <RowMessageChat >
                                    <ChatBubble>
                                        <ChatBubbleText>
                                            {chat.AI}
                                        </ChatBubbleText>
                                    </ChatBubble>
                                </RowMessageChat>
                            )
                        }
                    })}
                    </ChatContainer>

                </ScrollView>
            </Container>
            <ContainerText>
                <FlexRow>
                    <TextInput
                        onChangeText={onChangeChat}
                        value={chat}
                        placeholder={"Send a Chat"}
                        placeholderTextColor={"#00000090"}
                    />
                    <Button onPress={handleSendChat}>
                        <ButtonText>Send</ButtonText>
                    </Button>
                </FlexRow>
                <Spacer height="50px" />
            </ContainerText>
        </KeyboardAvoidingView>
    );
};

export default ChatScreen;
