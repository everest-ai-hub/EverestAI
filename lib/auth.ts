import { supabase } from './supabase'

export type AuthError = {
  message: string
  status?: number
}

export async function signUpWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      throw error
    }

    return { 
      user: data.user, 
      session: data.session,
      error: null,
      confirmEmail: !data.session // If no session, email confirmation is required
    }
  } catch (error: any) {
    return {
      user: null,
      session: null,
      confirmEmail: false,
      error: {
        message: error.message || 'An error occurred during sign up',
        status: error.status,
      } as AuthError,
    }
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    return { user: data.user, session: data.session, error: null }
  } catch (error: any) {
    return {
      user: null,
      session: null,
      error: {
        message: error.message || 'An error occurred during sign in',
        status: error.status,
      } as AuthError,
    }
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error: any) {
    return {
      error: {
        message: error.message || 'An error occurred during sign out',
        status: error.status,
      } as AuthError,
    }
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return { user, error: null }
  } catch (error: any) {
    return {
      user: null,
      error: {
        message: error.message || 'Error fetching user',
        status: error.status,
      } as AuthError,
    }
  }
}
