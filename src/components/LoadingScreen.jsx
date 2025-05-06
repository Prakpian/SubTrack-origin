import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-2xl text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
}
