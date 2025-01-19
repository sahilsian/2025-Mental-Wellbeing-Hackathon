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

const LoginScreen = () => {
    return (
        <Container>
            <Logo></Logo>
        </Container>
    )
}

export default LoginScreen