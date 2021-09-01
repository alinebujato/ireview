import { Container, Header, BoxRight, BoxLinks, Link, Title, BoxContent, SubTitle, BotaoCandidato, BotaoEmpresa, BotaoCandidato2, BotaoEmpresa2, BoxProcessos, ContainerProcessos } from './style';
import Logo from './assets/logo.svg';
import Image from './assets/image-home.jpeg';
import Processo from './assets/processo.png';
import Lupa from './assets/lupa.png';
import Dados from './assets/dados.png';
import Comunicacao from './assets/comunicacao.png';

function App() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo iReview"/>
        <BoxRight>
          <BoxLinks>
            <Link href='/'>Home</Link>
            <Link href='/'>Como funciona</Link>
            <Link href='/'>Preços</Link>
            <Link href='/'>Quem somos</Link>
          </BoxLinks>
          <div>
            <BotaoCandidato>Candidato</BotaoCandidato>
            <BotaoEmpresa>Quero contratar</BotaoEmpresa>
          </div>
        </BoxRight>
      </Header>
      <BoxContent>
        <Title>O último software de recrutamento que você precisa</Title>
        <SubTitle>Simpliﬁque e melhore seu processo de contratação!</SubTitle>
        <div>
          <BotaoCandidato2>Candidato</BotaoCandidato2>
          <BotaoEmpresa2>Quero contratar</BotaoEmpresa2>
        </div>
        <img src={Image} alt="recrutamento" style={{width: '600px', margin: '0 auto', padding: '32px 0'}}/>
        <Title>Seu recrutamento nunca foi tão fácil</Title>
        <ContainerProcessos>
          <BoxProcessos>
            <img src={Processo} alt="processo" width="60px" style={{ marginBottom: '32px', borderRadius: '50%' }} />
            Processo simples
          </BoxProcessos>
          <BoxProcessos>
            <img src={Lupa} alt="lupa" width="60px" style={{ marginBottom: '32px' }} />
            Encontre a pessoa ideal
          </BoxProcessos>
          <BoxProcessos>
            <img src={Dados} alt="Dados" width="60px" style={{ marginBottom: '32px' }} />
            Análise de dados
          </BoxProcessos>
          <BoxProcessos>
            <img src={Comunicacao} alt="Comunicacao" width="60px" style={{ marginBottom: '32px' }} />
            Comunicação certa
          </BoxProcessos>
        </ContainerProcessos>
      </BoxContent>
    </Container>
  );
}

export default App;
