import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Checo Marketing — Brand Scaling Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08080c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#7c3aed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            ⚡
          </div>
          <span style={{ color: "#ffffff", fontSize: 40, fontWeight: 700, letterSpacing: "-1px" }}>
            Checo<span style={{ color: "#a78bfa" }}>Marketing</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Your Brand.{" "}
          <span style={{ color: "#a78bfa" }}>Scaled.</span>
        </div>

        {/* Subtext */}
        <div style={{ color: "#6b6b80", fontSize: 22, textAlign: "center", maxWidth: 700 }}>
          Positioning · Content Strategy · Growth Systems
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 48,
            padding: "20px 48px",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {[["50+", "Brands Scaled"], ["$2M+", "Revenue Generated"], ["5.0", "Avg Rating"]].map(
            ([val, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <span style={{ color: "#a78bfa", fontSize: 28, fontWeight: 700 }}>{val}</span>
                <span style={{ color: "#6b6b80", fontSize: 14 }}>{label}</span>
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 32, color: "#3a3a50", fontSize: 16 }}>
          checomarketing.com
        </div>
      </div>
    ),
    { ...size }
  );
}
