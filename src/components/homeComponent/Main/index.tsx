import * as S from './styles';
import { TfiReload } from 'react-icons/tfi';
import { usePostPassword } from '@/global/services/POST/usePostPassword';
import { useContext, useRef, useState } from 'react';
import { PasswordDetailsContext, PasswordViewDetails } from '@/global/context';
import { BsClipboard } from 'react-icons/bs';

export const Main = () => {
  const { postPassword, isSuccessPostPassword } = usePostPassword();

  const { passwordInfo, setPasswordInfo } = useContext(PasswordDetailsContext);
  console.log(passwordInfo);
  const [passwordView, setPasswordView] = useState('');
  const sendInfo = async () => {
    const password = await postPassword(passwordInfo);
    setPasswordView(password);
    setTextClipBoard(false);
  };
  console.log(passwordView, 'aa');
  const [textClipBoard, setTextClipBoard] = useState(false);
  const keyLink = useRef<HTMLInputElement>(null);

  const copyText = () => {
    let inputProps = keyLink.current!;
    inputProps.select();
    inputProps.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputProps.value);
    setTextClipBoard(true);
  };

  return (
    <S.Container>
      <S.DataValues>
        <input type="text" ref={keyLink} value={passwordView} disabled />

        <article>
          <button>
            <BsClipboard onClick={() => copyText()} className="icon" />
            {textClipBoard ? <span>Copiado!</span> : <span>Copiar</span>}
          </button>
        </article>
        <article>
          <button onClick={sendInfo}>
            <TfiReload className="icon" />
            <span>Gerar</span>
          </button>
        </article>
      </S.DataValues>
    </S.Container>
  );
};
