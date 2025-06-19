import React, {useEffect, useState} from 'react';

import {supabase} from '@lib';
import {NavigationContainer} from '@react-navigation/native';
import {Session} from '@supabase/supabase-js';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Routes() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, _session) => {
      setSession(_session);
    });
  }, []);

  return (
    <NavigationContainer>
      {session ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
