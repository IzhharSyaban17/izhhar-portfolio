import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Izhhar Sya'ban Lubis - Web Developer & Taekwondo Coach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 30%, #1a0a00 70%, #0a0a1a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#d4af37",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "sans-serif",
            }}
          >
            Zar.
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(212, 175, 55, 0.6)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 8,
              fontFamily: "sans-serif",
            }}
          >
            Web Developer &amp; Taekwondo Coach
          </span>
          <div
            style={{
              width: 80,
              height: 2,
              background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
              marginBottom: 8,
            }}
          />
          <span
            style={{
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.5)",
              letterSpacing: "0.1em",
              fontFamily: "sans-serif",
            }}
          >
            Muhammad Izhhar Sya&apos;ban Lubis
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
