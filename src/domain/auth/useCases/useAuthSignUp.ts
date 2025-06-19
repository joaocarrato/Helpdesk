import {QueryKeys} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authApi} from '../authApi';
import {AuthAPI} from '../authTypes';

export function useAuthSignUp() {
  const query = useMutation({
    mutationKey: [QueryKeys.SignUp],
    mutationFn: authApi.signUp,
  });

  function signUp({email, fullName, password}: AuthAPI) {
    query.mutate({
      email,
      password,
      fullName,
    });
  }

  return {
    signUp,
    error: query.isError,
    loading: query.isPending,
  };
}
