import {supabase} from '@lib';

import {AuthAPI} from './authTypes';

async function signUp({email, password, fullName, role}: AuthAPI) {
  const {data} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role ?? 'client',
      },
    },
  });

  return {
    data,
  };
}

export const authApi = {signUp};
