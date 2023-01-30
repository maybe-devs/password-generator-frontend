import * as S from './styles';
import Box from '@mui/material/Box';

export const LoginModal = () => {
  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Informations>
        <span>Email:</span>
        <input type="text" placeholder="digite seu email:" alt="email" />
        <span>Senha:</span>
        <input type="text" placeholder="digite sua senha:" alt="senha" />
      </S.Informations>
      <S.ButtonContainer>
        <button className="signIn">Sign in</button>
        <button>Sign Up</button>
      </S.ButtonContainer>
    </S.Container>
  );
};
