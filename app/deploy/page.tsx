import { ProductPage } from "@/components/comp__product-page";
export default function DeployPage() {
  return (
    <ProductPage
      eyebrow="Sovora Deploy"
      title="From application code to production infrastructure."
      description="Connect a repository and Sovora builds the production environment your complete application needs."
      capabilities={[
        "Connect repository",
        "Analyse architecture",
        "Provision services",
      ]}
      note="Deploy handles environments, networking, databases, storage, rollbacks and observability as one application workflow."
    />
  );
}
