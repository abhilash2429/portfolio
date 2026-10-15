import { ImageResponse } from "next/og";
import config from "~/config";

export const alt = `${config.appName} | ${config.appDesignation}`;
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
          justifyContent: "space-between",
          padding: "80px",
          background: "#f2efe8",
          color: "#1c1b18",
        }}
      >
        <div style={{ fontSize: 28, color: "#8b867b" }}>{config.domainName}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 84, fontWeight: 600 }}>{config.appName}</div>
          <div style={{ display: "flex", fontSize: 44, color: "#57534b" }}>
            {`${config.appDesignation}. I build AI agents that do the work.`}
          </div>
          <div style={{ width: 220, height: 4, background: "#b8332a", borderRadius: 2 }} />
        </div>
        <div style={{ fontSize: 26, color: "#8b867b" }}>Open to full-time remote roles</div>
      </div>
    ),
    size,
  );
}
