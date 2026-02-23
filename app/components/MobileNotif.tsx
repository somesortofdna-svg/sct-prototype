"use client";

import { useEffect, useState } from "react";

export default function MobileNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("mobileNotificationSeen");

    if (!hasSeen && /Mobi|Android/i.test(navigator.userAgent)) {
      setShow(true);
      sessionStorage.setItem("mobileNotificationSeen", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#183f53",
        color: "#fff",
        padding: "14px 24px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        zIndex: 9999,
        maxWidth: "90%",
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      <span>If you’re on mobile, we recommend using desktop mode.</span>
      <button
        onClick={() => setShow(false)}
        style={{
          marginLeft: "12px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ✕
      </button>
    </div>
  );
}