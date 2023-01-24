import * as S from './styles';
import { AiFillExclamationCircle } from 'react-icons/ai';
import InputSlider from './InputSlider';
import { usePostPassword } from '../../../global/services/POST/usePostPassword';
import { ChangeEvent, useContext } from 'react';
import { PasswordDetailsContext } from '@/global/context';

type IPasswordInfo = {
  hasNumbers: boolean;
  hasSymbols: boolean;
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
};
export const Header = () => {
  const { postPassword, isSuccessPostPassword } = usePostPassword();

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
              <input type="checkbox" />
            </label>

            <span>Easy to say</span>
            <AiFillExclamationCircle className="checkIcon" />
          </article>
          <article>
            <label>
              <input type="checkbox" />
            </label>
            <span>Easy to read</span>
            <AiFillExclamationCircle className="checkIcon" />
          </article>
          <article>
            <label>
              <input type="checkbox" />
            </label>
            <span>All characters</span>
            <AiFillExclamationCircle className="checkIcon" />
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
          <article>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxState(e, 'hasNumbers')}
            />
            <span>Number</span>
          </article>
        </div>
      </S.PasswordInformations>
    </S.Container>
  );
};
