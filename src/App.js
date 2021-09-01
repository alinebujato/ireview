import { Container, Header, BoxRight, BoxLinks, Link, Title, BoxContent, SubTitle } from './style';
import Logo from './assets/logo.svg';

function App() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo iReview"/>
        <BoxRight>
          <BoxLinks>
            <Link>Home</Link>
            <Link>Como funciona</Link>
            <Link>Preços</Link>
            <Link>Quem somos</Link>
          </BoxLinks>
          <div>
            <button>Candidato</button>
            <button>Quero contratar</button>
          </div>
        </BoxRight>
      </Header>
      <BoxContent>
        <Title>O último software de recrutamento que você precisa</Title>
        <SubTitle>Simpliﬁque e melhore seu processo de contratação!</SubTitle>
        <div>
          <button>Candidato</button>
          <button>Quero contratar</button>
        </div>
        <Title>Seu recrutamento nunca foi tão fácil</Title>
        <div>Processo simples</div>
        <div>Ache a pessoa certa</div>
        <div>Análise de dados</div>
        <div>Comunicação efetiva</div>
        <Title>Como funciona</Title>
        <div>Escolha um plano</div>
      </BoxContent>
    </Container>
  );
}

export default App;
