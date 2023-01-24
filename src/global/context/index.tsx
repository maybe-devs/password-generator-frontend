import {
  createContext,
  Dispatch,
  SetStateAction,
  FC,
  ReactNode,
  useState,
} from 'react';

type IPasswordInfo = {
  hasNumbers: boolean;
  hasSymbols: boolean;
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
};

interface IContext {
  passwordInfo: IPasswordInfo;
  setPasswordInfo: Dispatch<SetStateAction<IPasswordInfo>>;
}

interface IProvider {
  children: ReactNode;
}
export const PasswordDetailsContext = createContext<IContext>(null!);

export const PasswordDetailsProvider: FC<IProvider> = ({ children }) => {
  const [passwordInfo, setPasswordInfo] = useState<IPasswordInfo>({
    hasNumbers: false,
    hasSymbols: false,
    length: 0,
    lowerCase: false,
    upperCase: false,
  });

  return (
    <PasswordDetailsContext.Provider value={{ passwordInfo, setPasswordInfo }}>
      {children}
    </PasswordDetailsContext.Provider>
  );
};
