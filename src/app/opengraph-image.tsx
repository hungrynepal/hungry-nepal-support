import { ImageResponse } from "next/og";

export const alt = "Hungry Hetauda — Food Delivery & Official Support Portal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF9F6",
          backgroundImage: "radial-gradient(circle at 50% 30%, #FFE4E6 0%, #FAF9F6 70%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#DC2626",
            color: "#FFFFFF",
            padding: "10px 24px",
            borderRadius: "9999px",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Official Support & Brand Portal
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "84px",
            fontWeight: 900,
            letterSpacing: "-2px",
            color: "#1C1917",
            lineHeight: 1.1,
          }}
        >
          Hungry{" "}
          <span style={{ color: "#DC2626", marginLeft: "16px" }}>Hetauda</span>
        </div>

        <div
          style={{
            fontSize: "30px",
            fontWeight: 600,
            color: "#78716C",
            marginTop: "20px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Your Favorite Meals, Delivered Fresh in Hetauda.
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#44403C",
          }}
        >
          <span>About Us</span>
          <span>•</span>
          <span>Terms & Conditions</span>
          <span>•</span>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Account Deletion</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
