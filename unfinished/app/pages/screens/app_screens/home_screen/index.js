import { useContext } from "react"
import { Button, Text } from "react-native"
import { Context } from "../../../../../helpers/context/context"
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color: #000000;
    padding: 16px; 
`;

const Spacer = styled.View`
    height: ${props=>props.height && props.height};
`;

const TopBar = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    align-items: center; 
`;

const Title = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 32px;
`;

const MedText = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 20px;
    margin-bottom: 8px;
`;

const MedSmallText = styled.Text`
    color: #FFFFFF;
    font-size: 18px;
    margin-bottom: 2px;
`;

const SmallText = styled.Text`
    color: #FFFFFF90;
    font-size: 12px;
`;

const AffirmationSec = styled.View`
    align-items: flex-start;
    padding: 12px;
`;

const StyleLine = styled.View`
    height: 1px;
    width: 100%;
    background-color: rgba(255, 255, 255, 25);
    margin: 16px auto;
`;

const MakeNewChatBox = styled.View`
  border-width: 2px;
  border-color: #FFFFFF;
  padding: 16px;
  flex-direction: column; 
  align-items: flex-start;
`;

const TextContainer = styled.View`
  margin-left: 12px; /* Space between icon and text */
  flex: 1;
  flex-direction: column; /* Stack text and button vertically */
`;

const AppBtn = styled.TouchableOpacity`
  height: 59px;
  width: 100%; /* Full width of the TextContainer */
  background-color: #8AC7FC;
  align-items: center;
  justify-content: center;
  border-radius: 8px; /* Optional rounded corners */
  margin-top: 12px; /* Space from text above */
`;

const AppBtnText = styled.Text`
  font-size: 18px;
`;

const IconTextWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    
`;



const HomeScreen = ({ navigation }) => {
    const { user, setUser } = useContext(Context)

    return (
        <>
            <Container>
                <Spacer height={"100px"}></Spacer>
                <TopBar>
                    <Title>Hello, {user ? user.fullName.split(" ")[0] : "Guest"}</Title>
                    <MaterialIcons name="settings" size={24} color="#FFFFFF" />
                </TopBar>
                <Spacer height={"30px"}></Spacer>
                <AffirmationSec>
                    <MedText>Healing is a Spectrum</MedText>
                    <SmallText>Tap for more...</SmallText>
                </AffirmationSec>
                <StyleLine />
                <MedText>Chat</MedText>
                <MakeNewChatBox>
                    <IconTextWrapper>
                        <MaterialIcons name="chat-bubble" size={26} color="white" />
                        <TextContainer>
                            <MedSmallText>Your Personal Assistant</MedSmallText>
                            <SmallText>Start a chat with me.</SmallText>
                        </TextContainer>
                    </IconTextWrapper>
                    <Spacer height={"10px"}></Spacer>
                    <AppBtn onPress={() => {
                        navigation.navigate("Chat");
                    }}>
                        <AppBtnText>Start a Chat</AppBtnText>
                    </AppBtn>
                </MakeNewChatBox>
            </Container>
        </>
    )
}

export default HomeScreen