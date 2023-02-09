import * as S from './styles';
import Link from 'next/link';
import { ShowAndHidePassword } from '@/components/globalComponents/ShowAndHidePassword';

export const LoginModal = () => {
  return (
    <S.Container>
      <S.SubTitle>LOGIN</S.SubTitle>
      <S.Information>
        <span>Email:</span>
        <input
          className="email"
          type="text"
          placeholder="digite seu email:"
          alt="email"
        />
        <span>Senha:</span>
        <ShowAndHidePassword />
      </S.Information>
      <S.ButtonContainer>
        <Link href="/registration">Sign Up</Link>
        <S.Button>
          <div>
            <Link href="/home"></Link>
          </div>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
