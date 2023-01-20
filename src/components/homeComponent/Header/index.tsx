import * as S from './styles';
import { AiFillExclamationCircle } from 'react-icons/ai';
import InputSlider from './InputSlider';
import { usePostPassword } from '../../../global/services/POST/usePostPassword';

export const Header = () => {
  const { postPassword, isSuccessPostPassword } = usePostPassword();
  // hasNumbers: true,
  // hasSymbols: true,
  // length: 32,
  // lowerCase: true,
  // upperCase: true,
  console.log(postPassword);

  const handleSuccessPost = () => {
    console.log('post aqui');
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Customize your password</S.Title>
        <button
          onClick={() => {
            postPassword;
          }}
        >
          aaa
        </button>
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
            <input type="checkbox" />
            <span>UpperCase</span>
          </article>
          <article>
            <input type="checkbox" />
            <span>LowCase</span>
          </article>
          <article>
            <input type="checkbox" />
            <span>Number</span>
          </article>
        </div>
      </S.PasswordInformations>
    </S.Container>
  );
};
