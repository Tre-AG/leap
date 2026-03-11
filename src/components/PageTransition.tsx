"use client";

import { useEffect, useState, type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  stepKey: string | number;
}

export default function PageTransition({
  children,
  stepKey,
}: PageTransitionProps) {
  const [visible, setVisible] = useState(false);
  const [currentKey, setCurrentKey] = useState(stepKey);
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (stepKey !== currentKey) {
      setVisible(false);
      const timeout = setTimeout(() => {
        setContent(children);
        setCurrentKey(stepKey);
        setVisible(true);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [stepKey, currentKey, children]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {content}
    </div>
  );
}
