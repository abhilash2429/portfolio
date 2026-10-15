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
          background: "#000",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.6 }}>{config.domainName}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 600 }}>{config.appName}</div>
          <div style={{ fontSize: 40, opacity: 0.85 }}>
            {`${config.appDesignation}. Agents, evals, backend.`}
          </div>
        </div>
        <div style={{ fontSize: 26, opacity: 0.6 }}>Open to full-time remote roles</div>
      </div>
    ),
    size,
  );
}
