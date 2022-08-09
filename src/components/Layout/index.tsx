import { Verse } from '../Verse';
import { Container, Wrapper, Title } from './styles';

export const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Louvado seja o Senhor Jesus Cristo</Title>
        <Verse />
      </Wrapper>
    </Container>
  );
};
