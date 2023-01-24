import * as S from './styles';
import { MdOutlineContentCopy } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';
import { usePostPassword } from '@/global/services/POST/usePostPassword';
import { useContext } from 'react';
import { PasswordDetailsContext } from '@/global/context';

export const Main = () => {
  const { postPassword, isSuccessPostPassword } = usePostPassword();

  const { passwordInfo, setPasswordInfo } = useContext(PasswordDetailsContext);
  console.log(passwordInfo);
  return (
    <S.Container>
      <p>gFJ#FjOp521F</p>
      <div>
        <MdOutlineContentCopy className="icon" />
        <button onClick={() => postPassword(passwordInfo)}>
          <TfiReload className="icon" />
        </button>
      </div>
    </S.Container>
  );
};
