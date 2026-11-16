"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

type CopyStatus = "idle" | "copied" | "error";

const RESET_DELAY_MS = 1800;

const STATUS_TEXT: Record<CopyStatus, string> = {
  idle: "",
  copied: "Copied!",
  error: "Copy failed",
};

type CopyButtonProps = {
  readonly value: string;
  /** Accessible name, e.g. "Copy email address". */
  readonly label: string;
  /** Visible idle text; omit for an icon-only button. */
  readonly text?: string;
  readonly className?: string;
};

async function writeToClipboard(value: string): Promise<void> {
  if (!navigator.clipboard?.writeText) {
    throw new Error("Clipboard API is unavailable in this browser context");
  }
  await navigator.clipboard.writeText(value);
}

export function CopyButton({ value, label, text, className = "" }: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  async function handleCopy() {
    try {
      await writeToClipboard(value);
      setStatus("copied");
    } catch (error) {
      console.error("[CopyButton] Failed to copy to clipboard:", error);
      setStatus("error");
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus("idle"), RESET_DELAY_MS);
  }

  const visibleText = status === "idle" ? text : STATUS_TEXT[status];
  const Icon = status === "copied" ? CheckIcon : CopyIcon;

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      title={label}
      className={`inline-flex items-center gap-1.5 transition-colors ${
        status === "copied" ? "text-ok" : status === "error" ? "text-accent" : ""
      } ${className}`}
    >
      <Icon width={14} height={14} />
      {visibleText ? <span>{visibleText}</span> : null}
      <span role="status" aria-live="polite" className="sr-only">
        {STATUS_TEXT[status]}
      </span>
    </button>
  );
}
