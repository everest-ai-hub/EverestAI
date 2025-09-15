"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getCurrentUser, signOut } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { getCompanyProfile } from "@/lib/profile";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProfileForm } from "@/components/profile-form";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { ServiceSelection } from "@/components/dashboard/service-selection";
import type { CompanyProfile } from "@/lib/types";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<CompanyProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState("ai-consulting");

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
      <div className="container mx-auto min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-12 md:py-16">
        <div className="container mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-1">{profile?.company_name || user?.email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline" className="shrink-0">
            Sign Out
          </Button>
        </div>
        
        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceSelection
            selectedService={selectedService}
            onServiceChange={setSelectedService}
          />

          <Card className="shadow-sm">
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
        </div>

        {profile && (
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Company Name</div>
                  <div>{profile.company_name}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Website</div>
                  <div>{profile.website}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Official Email</div>
                  <div>{profile.official_email}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Contact Person</div>
                  <div>{profile.primary_contact_name}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Contact Title</div>
                  <div>{profile.primary_contact_title}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">Phone</div>
                  <div>{profile.contact_phone}</div>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <div className="text-sm font-medium text-muted-foreground">Address</div>
                  <div>{profile.company_address}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-muted-foreground">VAT/PAN Number</div>
                  <div>{profile.vat_pan_number}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
    <Footer />
    </main>
  );
}
