"use client";

import { useState } from "react";
import Image from "next/image";
import { Placeholder } from "./placeholder";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  /** e.g. "(max-width: 1024px) 100vw, 600px" — helps Next pick the right size */
  sizes?: string;
  priority?: boolean;
  /** CSS object-position, e.g. "top" or "50% 20%" — where to anchor the crop. */
  position?: string;
};

/**
 * Optimised image that falls back to a labelled placeholder when no `src` is
 * configured or the file does not exist yet (e.g. before you add your photos).
 */
export function Photo({ src, alt, label, className, sizes = "100vw", priority, position = "center" }: Props) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <Placeholder label={label} className={className} />;
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        className="object-cover"
        style={{ objectPosition: position }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
