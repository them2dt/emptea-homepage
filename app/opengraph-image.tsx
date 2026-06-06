import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "emptea — The powerhouse for the businesses of the future.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#171717",
            letterSpacing: "-0.01em",
          }}
        >
          emptea
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "#0072f5",
            marginBottom: 32,
          }}
        >
          A suite for vibecoding
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 600,
            color: "#171717",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>The powerhouse for the</span>
          <span>businesses of the future.</span>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 28,
            fontSize: 28,
            fontWeight: 600,
            alignItems: "center",
          }}
        >
          <span style={{ color: "#0072f5" }}>Octo</span>
          <span style={{ color: "#c9c9c9", fontWeight: 400 }}>·</span>
          <span style={{ color: "#8e4ec6" }}>Aris</span>
          <span style={{ color: "#c9c9c9", fontWeight: 400 }}>·</span>
          <span style={{ color: "#45a557" }}>Peck</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
