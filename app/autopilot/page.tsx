import { ProductPage } from "@/components/comp__product-page";
export default function AutopilotPage() {
  return (
    <ProductPage
      eyebrow="Sovora Autopilot"
      title="Infrastructure that understands your application."
      description="Investigate incidents, identify likely causes and prepare safe operational actions with application context."
      capabilities={[
        "Diagnose deployments",
        "Investigate incidents",
        "Execute approved actions",
      ]}
      note="Autopilot brings deployments, logs, metrics and infrastructure state together—then turns them into recommendations your team can review and apply."
    />
  );
}
