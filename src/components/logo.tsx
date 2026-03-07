"use client"

import Image from "next/image"
import { useTheme } from "@/hooks/use-theme"

interface LogoProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 40, className }: LogoProps) {
  const { theme } = useTheme()

  const resolvedTheme =
    theme === "system"
      ? (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      : theme

  const src = resolvedTheme === "dark" ? "/logos/logo-icon-light.svg" : "/logos/logo-icon-dark.svg"

  return (
    <Image
      src={src}
      alt="Logo"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  )
}

export function Logo({ size = 120, className }: LogoProps) {
  const { theme } = useTheme()

  const resolvedTheme =
    theme === "system"
      ? (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      : theme

  const src = resolvedTheme === "dark" ? "/logos/logo-light.svg" : "/logos/logo-dark.svg"

  return (
    <Image
      src={src}
      alt="Logo"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: "auto", objectFit: "contain" }}
    />
  )
}
