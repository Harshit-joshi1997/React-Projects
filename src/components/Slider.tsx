import { useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

const images = [slide1, slide2, slide3, slide4, slide5];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <img
        src={images[index]}
        alt="Slide"
        className="w-full h-full object-cover"
      />

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        ◀
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
