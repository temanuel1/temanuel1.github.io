import assert from "node:assert/strict";
import { test } from "node:test";
import { splitMetrics } from "./metrics.ts";

const metricsIn = (text: string) => splitMetrics(text).filter((s) => s.isMetric).map((s) => s.text);

test("extracts resume impact metrics", () => {
  assert.deepEqual(metricsIn("over 75+ real-world models across 7+ archetypes"), ["75+", "7+"]);
  assert.deepEqual(metricsIn("flagged ~41% of healthy batches"), ["~41%"]);
  assert.deepEqual(metricsIn("used by 4,000+ engineers"), ["4,000+"]);
  assert.deepEqual(metricsIn("Contributed 15% of output and increased coverage by 10%."), ["15%", "10%"]);
  assert.deepEqual(metricsIn("with 80–90% accuracy"), ["80–90%"]);
});

test("ignores ordinary numbers", () => {
  assert.deepEqual(metricsIn("a 6-turn pipeline, 5-run scoring, WCAG 2.2, COMP 432"), []);
});

test("preserves the original text exactly", () => {
  const text = "Naive pass/fail flagged ~41% of healthy batches; 75+ models.";
  assert.equal(splitMetrics(text).map((s) => s.text).join(""), text);
});

test("handles text with no metrics or empty input", () => {
  assert.deepEqual(splitMetrics("plain"), [{ text: "plain", isMetric: false }]);
  assert.deepEqual(splitMetrics(""), []);
});
