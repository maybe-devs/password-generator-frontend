import { NextPage } from 'next';
import { Main } from './Main';
import { Header } from './Header';
import { Title } from './Title';

import * as S from './styles';
import { PasswordDetailsProvider } from '@/global/context';

export const HomeComponent = () => {
  return (
    <S.Container>
      <PasswordDetailsProvider>
        <Title />
        <Main />
        <Header />
      </PasswordDetailsProvider>
    </S.Container>
  );
};
