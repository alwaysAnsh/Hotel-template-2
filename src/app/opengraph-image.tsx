import { ImageResponse } from "next/og";

export const alt = "Suryavansh Haveli — Luxury Boutique Hotel in Jaisalmer, Rajasthan";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101827",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, #2A1910 0%, #101827 75%, #090E17 100%)",
          padding: "48px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Outer Minimal Gold Frame */}
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "2px solid rgba(214, 164, 93, 0.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          {/* Minimal Royal Haveli Arch & Sun Emblem */}
          <svg
            width="84"
            height="84"
            viewBox="0 0 48 48"
            fill="none"
            style={{ marginBottom: "28px" }}
          >
            <path
              d="M10 39V23C10 17.5 13.5 14 17.5 11.5C20.5 9.6 22.5 7.5 24 5.5C25.5 7.5 27.5 9.6 30.5 11.5C34.5 14 38 17.5 38 23V39"
              stroke="#D6A45D"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 39V24.5C15 20.5 18 18 24 13.5C30 18 33 20.5 33 24.5V39"
              stroke="#D6A45D"
              strokeWidth="1.1"
              strokeOpacity="0.65"
            />
            <circle cx="24" cy="24" r="3.2" fill="#D6A45D" />
            <path
              d="M7 39H41M11 42H37"
              stroke="#D6A45D"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#D6A45D",
              marginBottom: "18px",
            }}
          >
            JAISALMER · RAJASTHAN
          </div>

          {/* Hotel Name */}
          <div
            style={{
              fontSize: "64px",
              letterSpacing: "0.16em",
              color: "#F7F1E5",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.15,
            }}
          >
            SURYAVANSH HAVELI
          </div>

          {/* Divider */}
          <div
            style={{
              width: "120px",
              height: "1px",
              backgroundColor: "#C88A2B",
              marginTop: "26px",
              marginBottom: "24px",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "24px",
              fontStyle: "italic",
              color: "rgba(247, 241, 229, 0.82)",
              textAlign: "center",
            }}
          >
            A Sanctuary Carved in Golden Sandstone
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
