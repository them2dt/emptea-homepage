"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CdProps = {
  /** App name, screen-printed as curved text across the top of the data area. */
  title: string;
  /** App page opened after the launch animation. */
  href?: string;
  /** Optional app logo rendered as the disc background (under the iridescence). */
  logoSrc?: string;
  className?: string;
};

export function Cd({ title, href, logoSrc, className }: CdProps) {
  const [launching, setLaunching] = useState(false);

  // restore the disc when returning via back/forward cache
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => {
      if (e.persisted) setLaunching(false);
    };
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  const id = `cd-${title.replace(/\W+/g, "-").toLowerCase()}`;
  const rootClassName = cn("cd", launching && "cd-launching", className);

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName === "cd-rise" || e.animationName === "cd-fade") {
      if (href) {
        window.location.assign(href);
      } else {
        setTimeout(() => setLaunching(false), 500);
      }
    }
  };

  const disc = (
    <>
      <div className="cd-spin">
        <div className="cd-face">
          <div className="cd-base" />
          {logoSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoSrc} alt="" className="cd-logo" />
          )}
          <div className="cd-iridescence" />
          <div className="cd-iridescence cd-iridescence-b" />
          <div className="cd-grooves" />
          <div className="cd-rings" />
          <svg className="cd-text" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path id={`${id}-top`} d="M 40,100 a 60,60 0 1,1 120,0" />
            </defs>
            <text className="cd-title">
              <textPath
                href={`#${id}-top`}
                startOffset="50%"
                textAnchor="middle"
              >
                {title}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="cd-glare" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={title}
        className={rootClassName}
        onClick={(e) => {
          // modifier clicks keep native behavior (new tab etc.)
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          e.preventDefault();
          setLaunching(true);
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        {disc}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={title}
      className={rootClassName}
      onClick={() => setLaunching(true)}
      onAnimationEnd={handleAnimationEnd}
    >
      {disc}
    </button>
  );
}
