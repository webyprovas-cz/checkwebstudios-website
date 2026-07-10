import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#18181B",
          color: "#FFFFFF",
        }}
      >
        <div style={{ fontSize: 32, color: "#2563EB", fontWeight: 700 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, marginTop: 24, maxWidth: 900 }}>
          Weby, které vaší značce sluší a prodávají
        </div>
      </div>
    ),
    { ...size }
  );
}
