import { useContext } from "react"
import { Button, Text } from "react-native"
import { Context } from "../../../../../helpers/context/context"
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
    background-color: #000000;
    padding: 16px; 
    padding-top: 65px;
`;

const TopBar = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 20px;
`;

const Title = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 24px;
`;

const MedText = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 20px;
    margin-bottom: 8px;
`;

const MedSmallText = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 15px;
    margin-bottom: 2px;
`;

const SmallText = styled.Text`
    font-family: InriaSerif-Bold;
    color: #FFFFFF;
    font-size: 12px;
`;

const AffirmationSec = styled.View`
    margin-top: 40px; 
    align-items: flex-start; 
    padding-left: 16px; 
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
  font-family: InriaSerif-Bold;
  color: #FFFFFF;
  font-size: 18px;
`;

const IconTextWrapper = styled.View`
    flex-direction: row;
`;



const HomeScreen = ({ navigation }) => {
    const { user, setUser } = useContext(Context)

    return (
        <>
            <Container>
                <TopBar>
                    <Title>Hello, {user ? user.name : "Guest"}</Title>
                    <MaterialIcons name="settings" size={24} color="#FFFFFF" />
                </TopBar>
                <AffirmationSec>
                    <MedText>Healing is a Spectrum</MedText>
                    <SmallText>Tap for more...</SmallText>
                </AffirmationSec>
                <StyleLine />
                <MedText>Chat</MedText>
                <MakeNewChatBox>
                    <IconTextWrapper>
                        <MaterialIcons name="chat-bubble" size={32} color="white" />
                        <TextContainer>
                            <MedSmallText>Your Personal Assistant</MedSmallText>
                            <SmallText>Start a chat with me.</SmallText>
                        </TextContainer>
                    </IconTextWrapper>
                    <AppBtn onPress={() => {
                        navigation.navigate("Chat");
                    }}>
                        <AppBtnText>Start a Chat;</AppBtnText>
                    </AppBtn>
                </MakeNewChatBox>
                    <Button title="Logout" onPress={() => {
                        setUser(null)
                    }}></Button>
            </Container>
        </>
    )
}

export default HomeScreen