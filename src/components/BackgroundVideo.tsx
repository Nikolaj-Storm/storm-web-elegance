
import React from "react";

const BackgroundVideo = () => (
  <>
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden"
      style={{ zIndex: -3 }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <source src="/video/background.mp4" type="video/mp4" />
        <source src="/video/background.webm" type="video/webm" />
        Din browser understøtter ikke video-tag'et.
      </video>
    </div>
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: "rgba(244,226,207,0.7)",
        zIndex: -2,
      }}
    ></div>
  </>
);

export default BackgroundVideo;
