import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const categoryColors: Record<string, string> = {
  clean: "#10b981",
  convert: "#8b5cf6",
  analyze: "#f59e0b",
  format: "#0ea5e9"
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "SmartTextTools";
  const description = searchParams.get("description") || "Free online text utility tools";
  const category = searchParams.get("category") || "";
  const catLabel = searchParams.get("catLabel") || "";
  const catColor = categoryColors[category] || "#39bffd";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${catColor}33, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px"
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #39bffd, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: 800,
            }}
          >
            ST
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#64748b",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            SmartTextTools
          </span>
        </div>

        {/* Category badge */}
        {catLabel && (
          <div style={{ display: "flex", marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: `${catColor}18`,
                border: `1px solid ${catColor}50`,
                borderRadius: "100px",
                padding: "8px 20px",
                fontSize: "16px",
                color: catColor,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              {catLabel} • Free & Instant
            </div>
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: "60px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "750px",
          }}
        >
          {description}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
