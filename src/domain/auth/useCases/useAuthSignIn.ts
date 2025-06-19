import {QueryKeys} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authApi} from '../authApi';

export function useAuthSignIn() {
  const query = useMutation({
    mutationKey: [QueryKeys.SignIn],
    mutationFn: authApi.signIn,
  });

  function signIn({email, password}: {email: string; password: string}) {
    query.mutate({
      email,
      password,
    });
  }

  return {
    signIn,
  };
}
