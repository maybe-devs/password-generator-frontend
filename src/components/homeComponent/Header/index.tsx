import * as S from './styles';
import InputSlider from './InputSlider';
import { ChangeEvent, useContext } from 'react';
import { PasswordDetailsContext } from '@/global/context';

export const Header = () => {
  const { passwordInfo, setPasswordInfo } = useContext(PasswordDetailsContext);

  const handleCheckboxState = (
    e: ChangeEvent<HTMLInputElement>,
    currentKey: keyof typeof passwordInfo,
  ) => {
    let isChecked = e.target.checked;
    setPasswordInfo((prev) => ({ ...prev, [currentKey]: isChecked }));
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Customize your password</S.Title>
      </S.TitleContainer>
      <S.PasswordInformations>
        <div className="passwordLenght">
          <p>Password Length</p>
          <InputSlider />
        </div>
        <div className="checkboxGroupOne">
          <article>
            <label>
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxState(e, 'hasSymbols')}
              />
            </label>
            <span>All characters</span>
          </article>
          <article>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxState(e, 'hasNumbers')}
            />
            <span>Number</span>
          </article>
        </div>
        <div className="checkboxGroupOne">
          <article>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxState(e, 'upperCase')}
            />
            <span>UpperCase</span>
          </article>
          <article>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxState(e, 'lowerCase')}
            />
            <span>LowCase</span>
          </article>
        </div>
      </S.PasswordInformations>
    </S.Container>
  );
};
