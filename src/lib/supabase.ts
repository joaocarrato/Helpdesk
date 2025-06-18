import 'react-native-url-polyfill/auto';
import {AppState} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient, processLock} from '@supabase/supabase-js';

import {Database} from './types';

const supabaseUrl = 'https://exjgpunppvhhmqzmkpqa.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4amdwdW5wcHZoaG1xem1rcHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMTc0MTAsImV4cCI6MjA2NTc5MzQxMH0.zHcOn1-7Dxx8R2_N6auwP0syR-e-9XgdVRlOCv98jKY';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
});

/**
 * Listens to changes in the React Native app state and manages the Supabase auth token auto-refresh accordingly.
 *
 * When the app state changes:
 * - If the app becomes active (`state === 'active'`), it starts the Supabase auth token auto-refresh process.
 * - If the app moves to the background or becomes inactive, it stops the auto-refresh process to conserve resources.
 *
 * This ensures that authentication tokens are refreshed only when the app is in use, improving efficiency and security.
 */
AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
