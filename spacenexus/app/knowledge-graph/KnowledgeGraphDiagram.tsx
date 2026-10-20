"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ΓöÇΓöÇΓöÇ Data ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

const nodes = [
  { id: "center", label: "Knowledge Graph", x: 375, y: 238, w: 210, h: 65, rx: 14, fill: "#2563eb", textY: 278, fontSize: 18, fontWeight: "bold" as const },
  { id: "docs", label: "Deal Documents", x: 395, y: 60, w: 170, h: 55, rx: 12, fill: "#10b981", textY: 94, fontSize: 16, fontWeight: "600" as const },
  { id: "participants", label: "Deal Participants", x: 80, y: 185, w: 200, h: 55, rx: 12, fill: "#f59e0b", textY: 219, fontSize: 15, fontWeight: "600" as const },
  { id: "counterparties", label: "Counterparties", x: 670, y: 185, w: 190, h: 55, rx: 12, fill: "#8b5cf6", textY: 219, fontSize: 15, fontWeight: "600" as const },
  { id: "assets", label: "Target Assets", x: 170, y: 445, w: 220, h: 55, rx: 12, fill: "#ef4444", textY: 479, fontSize: 15, fontWeight: "600" as const },
  { id: "financials", label: "Financials", x: 570, y: 445, w: 200, h: 55, rx: 12, fill: "#06b6d4", textY: 479, fontSize: 15, fontWeight: "600" as const },
  { id: "contracts", label: "Contracts", x: 400, y: 465, w: 160, h: 55, rx: 12, fill: "#ec4899", textY: 499, fontSize: 15, fontWeight: "600" as const },
  { id: "vdr", label: "VDR Document Pipeline", x: 380, y: 565, w: 200, h: 55, rx: 12, fill: "#1e3a8a", textY: 599, fontSize: 15, fontWeight: "600" as const },
];

const edges = [
  { id: 0, x1: 480, y1: 250, x2: 480, y2: 110 },
  { id: 1, x1: 435, y1: 268, x2: 230, y2: 215 },
  { id: 2, x1: 525, y1: 268, x2: 730, y2: 215 },
  { id: 3, x1: 435, y1: 285, x2: 280, y2: 460 },
  { id: 4, x1: 525, y1: 285, x2: 670, y2: 460 },
  { id: 5, x1: 480, y1: 295, x2: 480, y2: 465 },
  { id: 6, x1: 480, y1: 505, x2: 480, y2: 575, dashed: true },
];

const edgeLabels = [
  { x: 492, y: 180, text: "filed by", edgeId: 0 },
  { x: 290, y: 232, text: "negotiated between", edgeId: 1 },
  { x: 590, y: 232, text: "acquired by", edgeId: 2 },
  { x: 305, y: 375, text: "due diligence for", edgeId: 3 },
  { x: 565, y: 375, text: "guaranteed by", edgeId: 4 },
  { x: 492, y: 395, text: "references", edgeId: 5 },
  { x: 492, y: 548, text: "ingested by", edgeId: 6 },
];

const nodePhase: Record<string, number> = {
  vdr: 0,
  contracts: 0.8,
  center: 1.6,
  docs: 2.4,
  participants: 2.5,
  counterparties: 2.6,
  assets: 2.7,
  financials: 2.8,
};

/* ΓöÇΓöÇΓöÇ Edge draw-in ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

function AnimatedEdge({ edge }: { edge: typeof edges[0] }) {
  const { x1, y1, x2, y2, dashed, id } = edge;
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const d = `M${x1},${y1} L${x2},${y2}`;
  const delay = 0.3 + id * 0.08;

  if (dashed) {
    return (
      <motion.path
        d={d}
        stroke="#d1d5db"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        initial={{ strokeDashoffset: length, opacity: 0 }}
        animate={{ strokeDashoffset: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      />
    );
  }

  return (
    <motion.path
      d={d}
      stroke="#d1d5db"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    />
  );
}

/* ΓöÇΓöÇΓöÇ Edge labels ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

function AnimatedEdgeLabel({ label }: { label: typeof edgeLabels[0] }) {
  return (
    <motion.text
      x={label.x}
      y={label.y}
      fontSize="14"
      fill="#6b7280"
      fontStyle="italic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.7 + label.edgeId * 0.08 }}
    >
      {label.text}
    </motion.text>
  );
}

/* ΓöÇΓöÇΓöÇ Directional data-flow dot (SVG animateMotion) ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

function DataFlowDot({
  x1,
  y1,
  x2,
  y2,
  reverse,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  reverse: boolean;
  delay: number;
}) {
  return (
    <circle r="3.5" fill="#2563eb" opacity="0">
      <animate
        attributeName="opacity"
        values="0;0.8;0.8;0"
        keyTimes="0;0.1;0.85;1"
        dur="3.5s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animateMotion
        dur="3.5s"
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={`M${x1},${y1} L${x2},${y2}`}
        keyPoints={reverse ? "1;0" : "0;1"}
        keyTimes="0;1"
        calcMode="linear"
      />
    </circle>
  );
}

/* ΓöÇΓöÇΓöÇ Node ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

function AnimatedNode({ node }: { node: typeof nodes[0] }) {
  const cx = node.x + node.w / 2;
  const cy = node.y + node.h / 2;
  const phaseDelay = nodePhase[node.id] ?? 0;
  const showPulse = node.id === "center";

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: phaseDelay, ease: "easeOut" }}
    >
      {showPulse && (
        <motion.rect
          x={node.x - 4}
          y={node.y - 4}
          width={node.w + 8}
          height={node.h + 8}
          rx={node.rx + 4}
          fill="none"
          stroke={node.fill}
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 2,
            delay: phaseDelay + 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      )}

      <motion.rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={node.rx}
        fill={node.fill}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: phaseDelay, type: "spring", stiffness: 200, damping: 15 }}
        style={{ transformOrigin: "center" }}
      />

      <motion.text
        x={cx}
        y={node.textY}
        textAnchor="middle"
        fontSize={node.fontSize}
        fontWeight={node.fontWeight}
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: phaseDelay + 0.2 }}
      >
        {node.label}
      </motion.text>
    </motion.g>
  );
}

/* ΓöÇΓöÇΓöÇ Main component ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ */

export default function KnowledgeGraphDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <svg
        viewBox="0 0 960 640"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full mx-auto"
        aria-hidden="true"
      >
        {isInView && (
          <>
            {edges.map((e) => (
              <AnimatedEdge key={e.id} edge={e} />
            ))}

            {edgeLabels.map((l) => (
              <AnimatedEdgeLabel key={l.edgeId} label={l} />
            ))}

            {nodes.map((n) => (
              <AnimatedNode key={n.id} node={n} />
            ))}

            {edges.map((e) => (
              <DataFlowDot
                key={`dot-${e.id}`}
                x1={e.x1}
                y1={e.y1}
                x2={e.x2}
                y2={e.y2}
                reverse={e.id === 5 || e.id === 6}
                delay={3.5 + e.id * 0.4}
              />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}
