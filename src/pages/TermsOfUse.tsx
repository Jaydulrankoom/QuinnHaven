import React from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../data";

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6 w-full prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:font-light prose-p:text-charcoal/80 prose-p:leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-8">Terms of Use</h1>
        
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          Welcome to QuinnHaven Kitchen Cabinets & Bathroom Design. By accessing or using our website, services, or visiting our showroom, you agree to comply with and be bound by the following Terms of Use. Please read these terms carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website or engaging our services, you agree to these Terms of Use and our Privacy Policy. If you do not agree, please refrain from using our website or services.
        </p>

        <h2>2. Services Provided</h2>
        <p>
          QuinnHaven provides luxury kitchen and bathroom design, remodeling, cabinetry, and material supply services. All project details, timelines, and costs will be agreed upon separately via a formal contract or agreement before work commences. Information provided on the website is for general informational purposes.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text, images, graphics, logos, and design concepts, is the intellectual property of QuinnHaven or its licensors. You may not reproduce, distribute, modify, or use our content without prior written permission.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          You agree to use our website and services only for lawful purposes. You must not:
        </p>
        <ul>
          <li>Submit false, misleading, or fraudulent information.</li>
          <li>Interfere with or disrupt the operation of the website.</li>
          <li>Attempt to gain unauthorized access to any part of the website or our systems.</li>
        </ul>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          The website and its content are provided "as is" and "as available" without any warranties of any kind, whether express or implied. While we strive to provide accurate and up-to-date information, we do not warrant that the website will be error-free, secure, or uninterrupted.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall QuinnHaven, its directors, employees, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the website or services, even if we have been advised of the possibility of such damages.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content or privacy practices of these external sites and accept no responsibility for them.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance with the laws of the State of Connecticut, without regard to its conflict of law principles. Any legal disputes shall be resolved in the courts of Connecticut.
        </p>

        <h2>9. Modifications to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms of Use at any time. Any changes will be posted on this page, and your continued use of the website or services constitutes acceptance of the modified terms.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms of Use, please contact us at:
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
