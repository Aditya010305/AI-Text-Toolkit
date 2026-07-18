import { useState } from "react";

export function useCopyToast() {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return { copied, copy };
}