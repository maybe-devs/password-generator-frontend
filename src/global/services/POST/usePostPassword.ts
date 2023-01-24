import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { API } from '../api';

interface PasswordTypes {
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}

const postPassword = async (body: PasswordTypes) => {
  try {
    await API.post(`/api/generate/password`, {
      // postPassword:
      body,
    });
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err?.response?.data);
    throw new Error('Internal server error', err as ErrorOptions | undefined);
  }
};

export const usePostPassword = () => {
  const { mutateAsync, isSuccess } = useMutation(
    async (dataPost: PasswordTypes) => {
      await postPassword(dataPost),
        { onSuccess: () => console.log('Deu certo!') };
    },
  );

  return {
    postPassword: mutateAsync,
    isSuccessPostPassword: isSuccess,
  };
};
