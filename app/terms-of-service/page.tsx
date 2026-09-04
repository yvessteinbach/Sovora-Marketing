import type { Metadata } from "next";
import { LegalPage } from "@/components/comp__legal-page";
import { FooterSection } from "@/components/sections/section__footer-section";

export const metadata: Metadata = {
  title: "Terms of Service | Sovora",
  description:
    "The terms that apply when you access and use the Sovora website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that apply when you access and use the Sovora website."
        updatedAt="July 28, 2026"
        sections={[
          {
            title: "1. Scope",
            children: (
              <p>
                These Terms of Service govern access to and use of the Sovora
                website and any services we make available through it. By
                accessing or using the website, you agree to these terms.
              </p>
            ),
          },
          {
            title: "2. Informational use",
            children: (
              <p>
                The website is provided for general information about Sovora and
                its services. Nothing on this website constitutes an offer,
                warranty, or binding commitment unless expressly agreed in
                writing.
              </p>
            ),
          },
          {
            title: "3. Service agreements",
            children: (
              <p>
                Any use of paid or operational Sovora services is subject to a
                separate written agreement or the service-specific terms
                presented when those services are made available.
              </p>
            ),
          },
          {
            title: "4. Acceptable use",
            children: (
              <p>
                You must not use this website in a way that infringes applicable
                law, interferes with its operation or security, attempts to gain
                unauthorised access, or infringes the rights of others.
              </p>
            ),
          },
          {
            title: "5. Intellectual property",
            children: (
              <p>
                All content, trademarks, designs, and other materials on this
                website belong to Sovora or their respective owners. No rights
                are granted except as necessary to use the website for its
                intended purpose.
              </p>
            ),
          },
          {
            title: "6. Availability and liability",
            children: (
              <p>
                We aim to keep the website available and secure, but cannot
                guarantee uninterrupted or error-free access. To the extent
                permitted by applicable law, Sovora is not liable for losses
                arising from use of, or inability to use, this website.
              </p>
            ),
          },
          {
            title: "7. Third-party services",
            children: (
              <p>
                The website may contain links or references to third-party
                services. Their availability and content are outside our
                control, and their terms and privacy notices apply to your use
                of them.
              </p>
            ),
          },
          {
            title: "8. Analytics",
            children: (
              <p>
                With your consent, we use Microsoft Clarity to collect usage
                data, such as interactions with page content and general device
                or browser information. This helps us understand how visitors
                use the page and improve it. The cookie notice lets you enable
                Clarity analytics and remember your choice. Microsoft&apos;s
                privacy notice applies to its processing of this data.
              </p>
            ),
          },
          {
            title: "9. Changes to these terms",
            children: (
              <p>
                We may update these terms when necessary. The version published
                on this page applies from the date shown above. Continued use of
                the website after an update constitutes acceptance of the
                revised terms.
              </p>
            ),
          },
          {
            title: "10. Governing law and jurisdiction",
            children: (
              <p>
                These terms are governed by Swiss law. Subject to mandatory law,
                the courts at the registered office of Sovora have exclusive
                jurisdiction over disputes arising from these terms.
              </p>
            ),
          },
        ]}
      />
      <FooterSection />
    </>
  );
}
