import { ProductPage } from "@/components/comp__product-page";

export default function InfrastructurePage() {
  return (
    <ProductPage
      eyebrow="Sovora Infrastructure"
      title="European infrastructure, visible by design."
      description="Understand the regions, providers and residency boundaries that support every Sovora application."
      capabilities={["European regions", "Provider controls", "Data residency"]}
      note="Infrastructure remains an implementation detail for developers, but never an unknown: Sovora makes its location, provider and policy boundaries visible."
    />
  );
}
