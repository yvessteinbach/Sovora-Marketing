import { ProductPage } from "@/components/comp__product-page";
export default function ControlPage() {
  return (
    <ProductPage
      eyebrow="Sovora Control"
      title="Define the rules. Sovora enforces the infrastructure."
      description="Set the boundaries for where applications, data, backups and supporting services can operate."
      capabilities={[
        "Sovereignty profiles",
        "Residency controls",
        "Approval workflows",
      ]}
      note="Control turns location, provider, access and operational requirements into policies that are visible, enforceable and auditable."
    />
  );
}
