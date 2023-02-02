import { useState } from 'react';
import * as S from './styles';

export const ShowAndHidePassword = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const handlePasswordChange = (event: any) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <S.Container>
      <input
        type={passwordType}
        onChange={handlePasswordChange}
        value={passwordInput}
        name="password"
        placeholder="digite sua senha:"
      />
      <S.ButtonGroup>
        <button
          className="hidePassword"
          style={{ display: 'none' }}
          onClick={togglePassword}
        >
          {passwordType === 'password' ? (
            <i className="bi bi-eye-slash"></i>
          ) : (
            <i className="bi bi-eye"></i>
          )}
        </button>
      </S.ButtonGroup>
    </S.Container>
  );
};
