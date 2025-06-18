import {supabase} from './supabase';

type AuthAPI = {
  email: string;
  password: string;
  fullName: string;
};

async function findAll() {
  const users = await supabase.from('users').select('id');
  console.log({users});
  return users.data;
}

async function signUp({email, password, fullName}: AuthAPI) {
  const {data, error} = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName,
        role: 'client',
      },
    },
  });

  return {
    data,
    error,
  };
}

export const supabaseService = {findAll, signUp};
