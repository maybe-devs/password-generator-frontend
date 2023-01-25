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

interface PasswordContext {
  passwordView: IPasswordView;
  setPasswordView: Dispatch<SetStateAction<IPasswordView>>;
}

interface IPasswordView {
  password: string;
}

interface IProvider {
  children: ReactNode;
}
export const PasswordDetailsContext = createContext<IContext>(null!);

export const PasswordDetailsProvider: FC<IProvider> = ({ children }) => {
  const [passwordInfo, setPasswordInfo] = useState<IPasswordInfo>({
    hasNumbers: false,
    hasSymbols: false,
    length: 10,
    lowerCase: false,
    upperCase: false,
  });

  return (
    <PasswordDetailsContext.Provider value={{ passwordInfo, setPasswordInfo }}>
      {children}
    </PasswordDetailsContext.Provider>
  );
};

export const PasswordViewContext = createContext<PasswordContext>(null!);

export const PasswordViewDetails: FC<IProvider> = ({ children }) => {
  const [passwordView, setPasswordView] = useState<IPasswordView>({
    password: 'string',
  });

  return (
    <PasswordViewContext.Provider value={{ passwordView, setPasswordView }}>
      {children}
    </PasswordViewContext.Provider>
  );
};
