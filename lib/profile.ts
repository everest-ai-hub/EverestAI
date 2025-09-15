import { supabase } from './supabase';
import type { CompanyProfile, ProfileFormData } from './types';

export async function getCompanyProfile(userId: string) {
  try {
    const { data, error } = await supabase
      .from('company_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return { profile: data, error: null };
  } catch (error: any) {
    return {
      profile: null,
      error: {
        message: error.message || 'Error fetching profile',
      },
    };
  }
}

export async function updateCompanyProfile(userId: string, profile: ProfileFormData) {
  try {
    const { data, error } = await supabase
      .from('company_profiles')
      .upsert({
        id: userId,
        ...profile,
      })
      .select()
      .single();

    if (error) throw error;
    return { profile: data, error: null };
  } catch (error: any) {
    return {
      profile: null,
      error: {
        message: error.message || 'Error updating profile',
      },
    };
  }
}