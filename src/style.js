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
    align-items: center;
`;

export const BoxRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: gray;
    text-decoration: none;
`;

export const BotaoCandidato = styled.button`
    margin-right: 16px;
    background: white;
    margin-right: 8px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border-color: #3353E6;
    outline: none;
    color: #3353E6;
    font-size: 16px;
    cursor: pointer;
`;

export const BotaoCandidato2 = styled.button`
    background: #4CBF2F;
    margin-right: 8px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    width: 140px;
`;

export const BotaoEmpresa = styled.button`
    background: #3353E6;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
`;

export const BotaoEmpresa2 = styled.button`
    margin: 32px 0 0 16px;
    background: #3353E6;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    width: 140px;
`;

export const Title = styled.span`
    color: #000384;
    font-size: 36px;
    margin-bottom: 24px;
`;

export const SubTitle = styled.span`
    color: #4c4c4c;
    font-size: 18px;
`;

export const ContainerProcessos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0 200px;
`;

export const BoxProcessos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: 200px;
    padding: 24px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
`;