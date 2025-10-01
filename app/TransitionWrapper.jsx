"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { PageTransition } from "../components";

export default function TransitionWrapper({ children }) {
  const pathname = usePathname() || "/";
  return <PageTransition pathname={pathname}>{children}</PageTransition>;
}


