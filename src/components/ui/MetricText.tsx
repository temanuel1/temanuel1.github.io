import { splitMetrics } from "@/lib/metrics";

/** Renders prose verbatim, lifting impact numbers ("75+", "~41%") to high-contrast text. */
export function MetricText({ text }: { readonly text: string }) {
  return (
    <>
      {splitMetrics(text).map((segment, index) =>
        segment.isMetric ? (
          <strong key={index} className="font-mono text-[0.94em] font-medium tracking-tight text-ink">
            {segment.text}
          </strong>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}
