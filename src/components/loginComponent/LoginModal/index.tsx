import * as S from './styles';
import Box from '@mui/material/Box';
import Link from 'next/link';

export const LoginModal = () => {
  return (
    <S.Container>
      <S.Title>LOGIN</S.Title>
      <S.Informations>
        <span>Email:</span>
        <input type="text" placeholder="digite seu email:" alt="email" />
        <span>Senha:</span>
        <input type="text" placeholder="digite sua senha:" alt="senha" />
      </S.Informations>
      <S.ButtonContainer>
        <button className="signIn">Sign in</button>
        <button>
          <Link href="/registration">Sign Up</Link>
        </button>
      </S.ButtonContainer>
    </S.Container>
  );
};
