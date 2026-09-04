import type { Metadata } from "next";
import { LegalPage } from "@/components/comp__legal-page";
import { FooterSection } from "@/components/sections/section__footer-section";

export const metadata: Metadata = {
  title: "Imprint | Sovora",
  description: "Information about the publisher and use of the Sovora website.",
};

export default function ImprintPage() {
  return (
    <>
      <LegalPage
        eyebrow="Legal"
        title="Imprint"
        description="Information about the publisher and the use of this website."
        updatedAt="July 19, 2026"
        sections={[
          {
            title: "Publisher",
            children: (
              <p>
                Sovora
                <br />
                Yves Steinbach
                <br />
                In den Böden 2<br />
                4143 Dornach, Switzerland
                <br />
                <a href="mailto:contact@sovora.dev">contact@sovora.dev</a>
              </p>
            ),
          },
          {
            title: "Company information",
            children: (
              <p>
                The company&apos;s legal form, registered address,
                commercial-register number, and VAT number will be published
                here once available.
              </p>
            ),
          },
          {
            title: "Liability for content",
            children: (
              <p>
                We take reasonable care to keep the information on this website
                accurate and current. However, we make no guarantee as to its
                completeness, accuracy, or availability. We may change or remove
                content at any time without notice.
              </p>
            ),
          },
          {
            title: "Liability for links",
            children: (
              <p>
                This website may link to third-party websites. We have no
                control over their content and accept no responsibility for it.
                The provider or operator of the linked site is responsible for
                its content.
              </p>
            ),
          },
          {
            title: "Copyright",
            children: (
              <p>
                The content and works on this website are protected by
                applicable copyright law. Reproduction, editing, distribution,
                or use beyond the limits of copyright law requires prior written
                consent from the respective rights holder.
              </p>
            ),
          },
        ]}
      />
      <FooterSection />
    </>
  );
}
