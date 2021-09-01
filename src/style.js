import styled from "styled-components";
import background from './assets/Background.png';

export const Container = styled.div`
    background-image: url(${background});
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px;
`;

export const BoxRight = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 24px;
    text-align: center;
`;

export const BoxLinks = styled.div`
    margin-right: 24px;
`;

export const Link = styled.a`
    margin-right: 16px;
`;

export const Title = styled.span`
    color: #0c1e5b;
    font-size: 36px;
    margin-bottom: 24px;
`;

export const SubTitle = styled.span`
    color: #4c4c4c;
    font-size: 18px;
`;