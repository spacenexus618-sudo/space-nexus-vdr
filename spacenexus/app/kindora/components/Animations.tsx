"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

// ─── Fade In + Slide Up on scroll ───────────────────────────────────────────
export function FadeInUp({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}

// ─── Staggered children container ───────────────────────────────────────────
export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// ─── Stagger child item ──────────────────────────────────────────────────────
export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// ─── Animated counter ────────────────────────────────────────────────────────
function parseNumber(val: string): { num: number; prefix: string; suffix: string } {
    const match = val.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)([^0-9]*)$/);
    if (!match) return { num: 0, prefix: "", suffix: val };
    return { num: parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export function AnimatedCounter({
    value,
    className,
}: {
    value: string;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { num, prefix, suffix } = parseNumber(value);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 1800, bounce: 0 });
    const display = useTransform(springValue, (v) =>
        num % 1 === 0 ? Math.round(v).toString() : v.toFixed(1)
    );

    useEffect(() => {
        if (isInView) motionValue.set(num);
    }, [isInView, motionValue, num]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

// ─── Fade in from left ───────────────────────────────────────────────────────
export function FadeInLeft({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}

// ─── Fade in from right ──────────────────────────────────────────────────────
export function FadeInRight({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}

// ─── Scale in (pop) ──────────────────────────────────────────────────────────
export function ScaleIn({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.5, delay, ease: [0.34, 1.56, 0.64, 1] }}
        >
            {children}
        </motion.div>
    );
}

// ─── Hero entrance (for page load, not scroll) ───────────────────────────────
export function HeroEntrance({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}
