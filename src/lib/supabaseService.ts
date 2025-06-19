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
    email,
    password,
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

async function signIn({email, password}: {email: string; password: string}) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return {
    data,
    error,
  };
}

async function signOut() {
  await supabase.auth.signOut();
}

export const supabaseService = {findAll, signUp, signIn, signOut};
