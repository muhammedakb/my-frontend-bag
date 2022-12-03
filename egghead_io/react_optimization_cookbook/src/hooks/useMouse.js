import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  // normalde her pozisyonu değiştinde anlık sürekli yazdırır
  // ama lodash'ten debounce fonksiyonu ile sarmalayıp 100ms
  // parametre verince mousemove event'i bittikten 100ms sonra yazdırır
  // buda daha performanslı çalışır
  const updateMousePosition = debounce((ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }, 100);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

export default useMousePosition;
