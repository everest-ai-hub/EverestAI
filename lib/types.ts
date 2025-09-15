export type CompanyProfile = {
  id: string;
  company_name: string;
  website: string;
  official_email: string;
  primary_contact_name: string;
  primary_contact_title: string;
  contact_phone: string;
  company_address: string;
  vat_pan_number: string;
  created_at?: string;
}

export type ProfileFormData = Omit<CompanyProfile, 'id' | 'created_at'>;