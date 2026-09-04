import {
  Message,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/ui__message";

type ProductVisualProps = { kind: "chat" | "tasks" | "analytics" | "logo" };

function OperatorChat() {
  return (
    <div className="absolute top-1/2 left-1/2 z-10 w-[82%] max-w-[480px] -translate-1/2 rounded-2xl bg-white p-4 text-[var(--color-text-strong)] shadow-[0_20px_42px_var(--color-product-card-shadow)] sm:p-5">
      <div className="mb-3 flex items-center justify-between border-b border-[var(--color-border)] pb-2.5">
        <div>
          <h3>Sovora Autopilot</h3>
          <p>Production incident</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[var(--color-brand-deep)]">
          <span className="size-1.5 rounded-full bg-[var(--color-brand-accent)]" />
          Monitoring
        </span>
      </div>
      <MessageGroup className="gap-2.5">
        <Message>
          <MessageContent className="gap-1">
            <MessageHeader className="px-0 text-[12px] text-[var(--color-text-subtle)]">
              Sovora Autopilot 09:41
            </MessageHeader>
            <div className="max-w-[92%] rounded-xl rounded-bl-sm bg-[var(--color-surface-muted)] px-3 py-2 text-[16px] leading-[1.35] font-normal">
              Production latency increased 41% after deployment #482.
            </div>
          </MessageContent>
        </Message>
        <Message align="end">
          <MessageContent className="gap-1">
            <MessageHeader className="px-0 text-[12px] text-[var(--color-text-subtle)]">
              Recommended action
            </MessageHeader>
            <div className="max-w-[92%] rounded-xl rounded-bl-sm bg-[var(--color-surface-muted)] px-3 py-2 text-[16px] leading-[1.35] font-normal">
              Increase API memory from 512 MB to 1 GB. Expected impact: −32%
              latency. Cost impact: +CHF 6.20 / month.
            </div>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  );
}

export function ProductVisual({ kind }: ProductVisualProps) {
  if (kind === "logo")
    return (
      <div className="grid min-h-[310px] place-items-center bg-[linear-gradient(145deg,var(--color-brand-650),var(--color-brand-navy))] text-[46px] font-extrabold italic">
        <strong>SOVORA</strong>
      </div>
    );
  if (kind === "tasks")
    return (
      <div className="relative h-[300px] overflow-hidden rounded-lg bg-[linear-gradient(135deg,var(--color-brand-700),var(--color-brand-300)_54%,var(--color-brand-pale))] sm:h-[430px]">
        <div className="absolute top-1/2 left-1/2 z-10 w-[85%] max-w-[540px] -translate-1/2 rounded-2xl bg-[var(--color-white)] p-4 text-[var(--color-text-strong)] shadow-[0_20px_42px_var(--color-product-card-shadow)] sm:p-5">
          <div className="flex items-start justify-between border-b border-[var(--color-border)] pb-3">
            <div>
              <span>Project Overview</span>
              <h3>Production</h3>
            </div>
            <span className="rounded-full bg-[var(--color-surface-blue-muted)] px-2.5 py-1 text-[9px] font-semibold text-[var(--color-brand-deep)]">
              Healthy
            </span>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[var(--color-border)] border-b border-[var(--color-border)] py-3">
            <div className="px-2 first:pl-0">
              <p>Services</p>
              <h3>4</h3>
            </div>
            <div className="px-3">
              <p>Deployments</p>
              <h3>1</h3>
            </div>
            <div className="px-3">
              <p>Errors</p>
              <h3>0</h3>
            </div>
          </div>

          <div className="pt-3">
            <div className="mb-2 flex items-center justify-between">
              <p>Application</p>
              <p className="text-[9px] text-[var(--color-text-subtle)]">
                Latest deploy · Ready
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Web", "Running"],
                ["API", "Running"],
                ["Worker", "Running"],
                ["PostgreSQL", "Connected"],
              ].map(([service, status]) => (
                <div
                  key={service}
                  className="flex items-center justify-between rounded-lg bg-[var(--color-surface-muted)] px-2.5 py-2"
                >
                  <span className="text-[10px] font-medium">{service}</span>
                  <span className="flex items-center gap-1 text-[9px] text-[var(--color-brand-deep)]">
                    <span className="size-1 rounded-full bg-[var(--color-brand-accent)]" />
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  if (kind === "analytics")
    return (
      <div className="relative h-[300px] overflow-hidden rounded-lg bg-[linear-gradient(135deg,var(--color-brand-650),var(--color-brand-300)_54%,var(--color-brand-pale))] sm:h-[430px]">
        <OperatorChat />
      </div>
    );
  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg bg-[linear-gradient(135deg,var(--color-brand-700),var(--color-brand-300)_54%,var(--color-brand-pale))] sm:h-[430px]">
      <div className="absolute top-1/2 left-1/2 z-10 w-[84%] max-w-[520px] -translate-1/2 rounded-2xl bg-[var(--color-white)] p-4 text-[var(--color-text-strong)] shadow-[0_20px_42px_var(--color-product-card-shadow)] sm:p-5">
        <div className="flex items-start justify-between border-b border-[var(--color-border)] pb-3">
          <div>
            <span>Deployment Overview</span>
            <h3>Deployment #4218</h3>
          </div>
          <span className="rounded-full bg-[var(--color-surface-blue-muted)] px-2.5 py-1 text-[9px] font-semibold text-[var(--color-brand-deep)]">
            Healthy
          </span>
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-[var(--color-border)]">
          <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-2">
            <p className="text-[10px] font-semibold">Deployment build log</p>
          </div>
          {[
            ["16:03", "Build", "Preparing repository source"],
            ["16:04", "Build", "Building production deployment"],
            ["16:08", "Ready", "Production is ready"],
          ].map(([time, label, event]) => (
            <div
              key={event}
              className="grid grid-cols-[36px_48px_1fr] items-center gap-2 border-b border-[var(--color-border)] px-3 py-2.5 last:border-b-0"
            >
              <span className="text-[9px] text-[var(--color-text-subtle)]">
                {time}
              </span>
              <span
                className={`rounded-full px-1.5 py-1 text-center text-[8px] font-semibold ${label === "Ready" ? "bg-[var(--color-surface-blue-muted)] text-[var(--color-brand-deep)]" : "bg-[var(--color-surface-muted)] text-[var(--color-text-subtle)]"}`}
              >
                {label}
              </span>
              <span className="text-[10px] font-medium">{event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
