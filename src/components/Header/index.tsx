import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: IHeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

export { Header };
