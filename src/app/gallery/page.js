import Egypt from "@/pages/gallery/Egypt";
import Hawaii from "@/pages/gallery/Hawaii";
import HomeGallery from "@/pages/gallery/Home";
import Mumbai from "@/pages/gallery/Mumbai";
import Paris from "@/pages/gallery/Paris";
import Sydney from "@/pages/gallery/Sydney";
import Tokyo from "@/pages/gallery/Tokyo";
import React from "react";

export default function GalleryRoute() {
  return (
    <main>
      <HomeGallery />
      <Hawaii />
      <Mumbai />
      <Paris />
      <Sydney />
      <Tokyo />
      <Egypt />
    </main>
  );
}
