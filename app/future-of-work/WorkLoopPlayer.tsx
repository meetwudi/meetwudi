"use client";

import { Player } from "@remotion/player";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type WorkLoopScreen = {
  label: string;
  title: string;
  body: string;
  items: string[];
  note: string;
  principle?: boolean;
};

const screens: WorkLoopScreen[] = [
  {
    label: "Define work",
    title: "Turn a messy workflow into a clear run",
    body: "Name the inputs, owner, review points, and what good work looks like.",
    items: ["Inputs", "Owner", "Review rule", "Expected artifact"],
    note: "Example: customer follow-ups need order context, tone rules, and a manager check.",
  },
  {
    label: "Execute the run",
    title: "Run the work with visible steps",
    body: "Status, handoffs, drafts, and approvals are visible before anything leaves the business.",
    items: ["Context gathered", "Draft prepared", "Human review", "Ready to send"],
    note: "The work is no longer hidden in chat. It becomes a run someone can inspect.",
  },
  {
    label: "Improve the work",
    title: "Use feedback to improve the next run",
    body: "Corrections become updated instructions instead of disappearing into memory.",
    items: ["Feedback captured", "Instructions updated", "Next run clearer", "Pattern learned"],
    note: "Excellence is good work, improved, and repeated.",
    principle: true,
  },
];

function ScreenCard({
  screen,
  index,
}: {
  screen: WorkLoopScreen;
  index: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const start = index * 90;
  const progress = spring({
    frame: frame - start,
    fps,
    config: {
      damping: 28,
      stiffness: 110,
    },
  });
  const opacity = interpolate(
    frame,
    [start - 18, start, start + 72, start + 90],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const y = interpolate(progress, [0, 1], [24, 0]);

  return (
    <div
      className="remotion-screen"
      style={{
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div className="remotion-screen-top">
        <span>{screen.label}</span>
        <strong>{String(index + 1).padStart(2, "0")}</strong>
      </div>
      <h2>{screen.title}</h2>
      <p>{screen.body}</p>
      <div className="remotion-item-grid">
        {screen.items.map((item, itemIndex) => {
          const itemOpacity = interpolate(
            frame,
            [start + 10 + itemIndex * 8, start + 22 + itemIndex * 8],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );

          return (
            <div
              className="remotion-item"
              key={item}
              style={{
                opacity: itemOpacity,
                transform: `translateX(${interpolate(itemOpacity, [0, 1], [14, 0])}px)`,
              }}
            >
              <span />
              {item}
            </div>
          );
        })}
      </div>
      {screen.principle ? (
        <div className="remotion-principle">
          <span>Operating principle</span>
          <strong>{screen.note}</strong>
        </div>
      ) : (
        <div className="remotion-note">{screen.note}</div>
      )}
    </div>
  );
}

function WorkLoopAnimation() {
  const frame = useCurrentFrame();
  const active = Math.min(2, Math.floor((frame % 270) / 90));

  return (
    <AbsoluteFill className="remotion-canvas">
      <div className="remotion-header">
        <span>Work loop</span>
        <strong>{screens[active].label}</strong>
      </div>
      <div className="remotion-stage">
        {screens.map((screen, index) => (
          <ScreenCard key={screen.label} screen={screen} index={index} />
        ))}
      </div>
      <div className="remotion-progress" aria-hidden="true">
        {screens.map((screen, index) => (
          <span
            className={index === active ? "active" : ""}
            key={screen.label}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
}

export function WorkLoopPlayer() {
  return (
    <div className="remotion-shell">
      <Player
        autoPlay
        initiallyMuted
        loop
        component={WorkLoopAnimation}
        compositionHeight={720}
        compositionWidth={900}
        controls={false}
        durationInFrames={270}
        fps={30}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}
