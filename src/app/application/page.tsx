"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const countries = [
  "United States", "Canada", "Mexico", "United Kingdom", "Germany", "France", 
  "Spain", "Italy", "Netherlands", "Sweden", "Norway", "Denmark", "Finland",
  "Australia", "New Zealand", "Japan", "South Korea", "Singapore", "Philippines",
  "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Thailand", "Vietnam",
  "Malaysia", "Indonesia", "Brazil", "Argentina", "Chile", "Colombia", "Peru",
  "Venezuela", "Ecuador", "Uruguay", "Paraguay", "Bolivia", "South Africa",
  "Nigeria", "Kenya", "Ghana", "Egypt", "Morocco", "Tunisia", "Algeria",
  "Ethiopia", "Uganda", "Tanzania", "Rwanda", "Other"
];

const occupations = [
  "Licensed Practical Nurse (LPN)",
  "Travel Sterile Processing Technician",
  "Registered Nurse (RN)",
  "Certified Nursing Assistant (CNA)",
  "Medical Assistant",
  "Pharmacy Technician",
  "Physical Therapist",
  "Occupational Therapist",
  "Respiratory Therapist",
  "Medical Technologist",
  "Radiology Technician",
  "Surgical Technician",
  "Other"
];

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    
    // Contact Info
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Background Info
    occupation: "",
    yearsExperience: "",
    currentlyInUS: "",
    presentLocation: "",
    country: "",
    immigrationStatus: "",
    interestedListing: "",
    skillsSpecialties: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We&apos;ll be in touch soon.");
  };

  return (
    <div className="font-sans">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <div className="container-px mx-auto max-w-content">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center" aria-label="AG Health Pro home">
              <Image
                src="/logo.svg"
                alt="AG Health Pro"
                width={120}
                height={49}
                priority
                className="h-8 w-auto md:h-9"
              />
            </Link>
          </div>
        </div>
      </header>
      <main className="min-h-screen bg-background">
        <div className="container-px mx-auto max-w-4xl py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Healthcare Career Application
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Join our network of healthcare professionals and start your journey to a rewarding career in the US.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Personal Information */}
            <section className="bg-surface rounded-xl p-8 border border-black/5 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Personal Information
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-surface rounded-xl p-8 border border-black/5 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Contact Information
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Background Information */}
            <section className="bg-surface rounded-xl p-8 border border-black/5 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Background Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="occupation" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Select Occupation *
                  </label>
                  <select
                    id="occupation"
                    name="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    <option value="">Select an occupation</option>
                    {occupations.map((occupation) => (
                      <option key={occupation} value={occupation}>
                        {occupation}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="yearsExperience" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Years of Experience *
                  </label>
                  <select
                    id="yearsExperience"
                    name="yearsExperience"
                    required
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    <option value="">Select years of experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Are you currently in the US? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="currentlyInUS"
                        value="yes"
                        checked={formData.currentlyInUS === "yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="currentlyInUS"
                        value="no"
                        checked={formData.currentlyInUS === "no"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                {formData.currentlyInUS === "no" && (
                  <>
                    <div>
                      <label htmlFor="presentLocation" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Present Location *
                      </label>
                      <input
                        type="text"
                        id="presentLocation"
                        name="presentLocation"
                        required={formData.currentlyInUS === "no"}
                        value={formData.presentLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="City, State/Province"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                        Select Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required={formData.currentlyInUS === "no"}
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="immigrationStatus" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    What is your current immigration status?
                  </label>
                  <input
                    type="text"
                    id="immigrationStatus"
                    name="immigrationStatus"
                    value={formData.immigrationStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="e.g., Citizen, Green Card, H-1B, F-1, etc."
                  />
                </div>

                <div>
                  <label htmlFor="interestedListing" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    If applying for a position from our online job listings section, please indicate which listing you are interested in
                  </label>
                  <input
                    type="text"
                    id="interestedListing"
                    name="interestedListing"
                    value={formData.interestedListing}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Job title or listing reference"
                  />
                </div>

                <div>
                  <label htmlFor="skillsSpecialties" className="block text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                    Skills/Specialties
                  </label>
                  <textarea
                    id="skillsSpecialties"
                    name="skillsSpecialties"
                    rows={4}
                    value={formData.skillsSpecialties}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-black/10 dark:border-white/20 bg-background focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="List your relevant skills, certifications, and specialties"
                  />
                </div>
              </div>
            </section>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-brand text-white font-semibold rounded-md hover:bg-brand/90 transition-colors text-lg"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
