import * as S from './styles';
import { MdOutlineContentCopy } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';
import { usePostPassword } from '@/global/services/POST/usePostPassword';
import { useContext, useState } from 'react';
import { PasswordDetailsContext, PasswordViewDetails } from '@/global/context';

export const Main = () => {
  const { postPassword, isSuccessPostPassword } = usePostPassword();

  const { passwordInfo, setPasswordInfo } = useContext(PasswordDetailsContext);
  const [passwordView, setPasswordView] = useState('');
  const sendInfo = async () => {
    const password = await postPassword(passwordInfo);
    setPasswordView(password);
  };

  return (
    <S.Container>
      <p>{passwordView}</p>
      <div>
        <MdOutlineContentCopy className="icon" />
        <button onClick={sendInfo}>
          <TfiReload className="icon" />
        </button>
      </div>
    </S.Container>
  );
};
