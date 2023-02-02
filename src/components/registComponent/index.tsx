import { ShowAndHidePassword } from '../globalComponents/ShowAndHidePassword';
import { RegistrationModal } from './RegistrationModal';

import * as S from './styles';

export const RegistComponent = () => {
  return (
    <S.Container>
      <h1>Cadastro</h1>
      <RegistrationModal />
      <ShowAndHidePassword />
    </S.Container>
  );
};
