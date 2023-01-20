// import { useMutation, useQueryClient } from 'react-query';
// import { toast } from 'react-toastify';

// export const postPassword = async (data: PasswordTypes) => {
//   try {
//     const res = await axios.post(
//       `http://localhost:3333/api/generate/password`,
//       data,
//     );

//     return res.data;
//   } catch (error) {
//     throw new Error();
//   }
// };

// export const usePostPassword = (data: PasswordTypes) => {
//   const queryClient = useQueryClient();
//   const queryValues = useMutation(async (postParams: PasswordTypes) => {
//     toast.promise(
//       async () => {
//         let res = await postPassword(data);

//         await queryClient.invalidateQueries(['passwordPost']);
//         return res;
//       },
//       {
//         error: 'Erro ao gerar o password!',
//         pending: 'Gerando password...',
//         success: 'Sucesso ao gerar password',
//       },
//       {
//         position: 'top-center',
//         autoClose: 800,
//       },
//     );
//   });
//   return queryValues;
// };

import { useMutation } from 'react-query';
import axios from 'axios';

interface PasswordTypes {
  length: number;
  lowerCase: boolean;
  upperCase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}

const postPassword = async (body: PasswordTypes) => {
  try {
    await axios.post(`students/medicalRecords`, { postPassword: body });
  } catch (err: any) {
    throw new Error(err.message);
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
