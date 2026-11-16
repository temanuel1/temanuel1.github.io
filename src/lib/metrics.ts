export type TextSegment = {
  readonly text: string;
  readonly isMetric: boolean;
};

/**
 * Matches quantitative impact figures: "75+", "~41%", "4,000+", "15%", "80–90%", "7+".
 * Requires a trailing "+" or "%" so ordinary numbers ("6-turn", "WCAG 2.2", "COMP 432") are left alone.
 */
const METRIC_PATTERN = /(~?\d[\d,]*(?:\.\d+)?(?:[–-]\d[\d,]*)?[+%])/g;

/** Split prose into plain and metric segments without altering any characters. */
export function splitMetrics(text: string): readonly TextSegment[] {
  return text
    .split(METRIC_PATTERN)
    .map((part, index) => ({ text: part, isMetric: index % 2 === 1 }))
    .filter((segment) => segment.text.length > 0);
}
