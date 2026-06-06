"use client";

import { type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionProps,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Shared easing — luxuriously slow cubic-bezier
// ---------------------------------------------------------------------------
const luxuryEase = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// FadeUp — scroll-triggered fade + translate-Y reveal
// ---------------------------------------------------------------------------
interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 32,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: luxuryEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// FadeIn — scroll-triggered opacity-only reveal
// ---------------------------------------------------------------------------
interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// StaggerContainer + StaggerItem — staggered children reveals
// ---------------------------------------------------------------------------
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
};

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Parallax — scroll-linked vertical offset for depth
// ---------------------------------------------------------------------------
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className, speed = 0.3 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [speed * -80, speed * 80]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ScaleOnHover — subtle lift + scale for cards
// ---------------------------------------------------------------------------
interface ScaleOnHoverProps extends MotionProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function ScaleOnHover({
  children,
  className,
  scale = 1.02,
  ...rest
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale, y: -4 }}
      transition={{ duration: 0.35, ease: luxuryEase }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// HeroParallax — scroll-driven parallax specifically for the hero bg
// ---------------------------------------------------------------------------
export function HeroParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0.3]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y, scale, opacity }} className="size-full">
        {children}
      </motion.div>
    </div>
  );
}
