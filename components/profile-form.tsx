"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { CompanyProfile, ProfileFormData } from "@/lib/types";
import { updateCompanyProfile } from "@/lib/profile";

interface ProfileFormProps {
  initialData?: CompanyProfile;
  userId: string;
  onProfileUpdate: (profile: CompanyProfile) => void;
}

export function ProfileForm({ initialData, userId, onProfileUpdate }: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileFormData>({
    company_name: initialData?.company_name || "",
    website: initialData?.website || "",
    official_email: initialData?.official_email || "",
    primary_contact_name: initialData?.primary_contact_name || "",
    primary_contact_title: initialData?.primary_contact_title || "",
    contact_phone: initialData?.contact_phone || "",
    company_address: initialData?.company_address || "",
    vat_pan_number: initialData?.vat_pan_number || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const { profile, error } = await updateCompanyProfile(userId, formData);

    if (error) {
      setError(error.message);
    } else if (profile) {
      setSuccess("Profile updated successfully!");
      onProfileUpdate(profile);
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company_name">Company Name</Label>
          <Input
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="official_email">Official Email</Label>
          <Input
            id="official_email"
            name="official_email"
            type="email"
            value={formData.official_email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primary_contact_name">Primary Contact Name</Label>
          <Input
            id="primary_contact_name"
            name="primary_contact_name"
            value={formData.primary_contact_name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primary_contact_title">Contact Person Title</Label>
          <Input
            id="primary_contact_title"
            name="primary_contact_title"
            value={formData.primary_contact_title}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact_phone">Contact Phone</Label>
          <Input
            id="contact_phone"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="company_address">Company Address</Label>
          <Input
            id="company_address"
            name="company_address"
            value={formData.company_address}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vat_pan_number">VAT/PAN Number</Label>
          <Input
            id="vat_pan_number"
            name="vat_pan_number"
            value={formData.vat_pan_number}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  );
}