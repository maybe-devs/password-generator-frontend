import { NextPage } from 'next';
import { Main } from './Main';
import { Header } from './Header';
import { Title } from './Title';

import * as S from './styles';

export const HomeComponent = () => {
  return (
    <S.Container>
      <Title />
      <Main />
      <Header />
    </S.Container>
  );
};
