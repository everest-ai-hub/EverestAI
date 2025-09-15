"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getCurrentUser, signOut } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { getCompanyProfile } from "@/lib/profile";
import { ProfileForm } from "@/components/profile-form";
import type { CompanyProfile } from "@/lib/types";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<CompanyProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { user, error } = await getCurrentUser();
      if (error || !user) {
        window.location.href = "/login";
        return;
      }
      setUser(user);

      // Fetch profile
      const { profile, error: profileError } = await getCompanyProfile(user.id);
      if (profileError) {
        setError(profileError.message);
      } else {
        setProfile(profile);
      }
      setLoading(false);
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          window.location.href = "/login";
        } else if (session?.user) {
          setUser(session.user);
        }
      }
    );

    checkUser();

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      window.location.href = "/login";
    }
  };

  const handleProfileUpdate = (updatedProfile: CompanyProfile) => {
    setProfile(updatedProfile);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{profile ? 'Company Profile' : 'Complete Your Profile'}</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <ProfileForm
              initialData={profile || undefined}
              userId={user.id}
              onProfileUpdate={handleProfileUpdate}
            />
          </CardContent>
        </Card>

        {profile && (
          <Card>
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Company Name:</strong>
                  <p>{profile.company_name}</p>
                </div>
                <div>
                  <strong>Website:</strong>
                  <p>{profile.website}</p>
                </div>
                <div>
                  <strong>Official Email:</strong>
                  <p>{profile.official_email}</p>
                </div>
                <div>
                  <strong>Contact Person:</strong>
                  <p>{profile.primary_contact_name}</p>
                </div>
                <div>
                  <strong>Contact Title:</strong>
                  <p>{profile.primary_contact_title}</p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p>{profile.contact_phone}</p>
                </div>
                <div className="col-span-2">
                  <strong>Address:</strong>
                  <p>{profile.company_address}</p>
                </div>
                <div>
                  <strong>VAT/PAN Number:</strong>
                  <p>{profile.vat_pan_number}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
