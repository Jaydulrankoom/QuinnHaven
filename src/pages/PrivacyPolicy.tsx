import React from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../data";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6 w-full prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:font-light prose-p:text-charcoal/80 prose-p:leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-8">Privacy Policy</h1>
        
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          At QuinnHaven Kitchen Cabinets & Bathroom Design ("QuinnHaven", "we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, visit our showroom, or engage our services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, phone number, address, and project details when you:
        </p>
        <ul>
          <li>Fill out a contact form or request a consultation on our website.</li>
          <li>Subscribe to our newsletter or request a catalog.</li>
          <li>Schedule a visit to our showroom.</li>
          <li>Communicate with us via email, phone, or in person.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>To provide and manage our services, including consultations, design, and remodeling projects.</li>
          <li>To communicate with you regarding your inquiries, appointments, and project updates.</li>
          <li>To improve our website, services, and customer experience.</li>
          <li>To send you promotional materials, newsletters, and special offers (you may opt-out at any time).</li>
          <li>To comply with legal obligations and enforce our terms and conditions.</li>
        </ul>

        <h2>3. Data Protection and Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or alteration. We restrict access to your information to authorized personnel who need it to provide you with our services.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided that these parties agree to keep this information confidential.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to request access, correction, or deletion of your personal data held by us. If you wish to exercise any of these rights, please contact us using the information provided below.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>QuinnHaven Kitchen Cabinets & Bathroom Design</strong><br />
          Email: {BRAND.email}<br />
          Phone: {BRAND.phone}
        </p>
      </div>
    </div>
  );
}
