import { ProductPage } from "@/components/comp__product-page";
export default function PlatformPage() {
  return (
    <ProductPage
      eyebrow="Sovora Platform"
      title="The autonomous application platform for Europe."
      description="Sovora connects application delivery, operational intelligence and infrastructure control in one platform."
      capabilities={["Deploy", "Autopilot", "Control"]}
      note="Your application stays at the centre. Sovora translates its architecture into infrastructure, operates it with context, and keeps it within the boundaries you define."
    />
  );
}
