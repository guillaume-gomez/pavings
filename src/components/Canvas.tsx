import { useRef } from "react";

interface CanvasProps {
  width: number;
  height: number;
  toggleFullScreen: (target: EventTarget) => void;
}

function Canvas({width, height, toggleFullScreen}: CanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);
  
  return (
    <canvas
      ref={refCanvas}
      width={width}
      height={height}
      style={{background:"#797979"}}
      onDoubleClick={(event) => toggleFullScreen(event.target)}
    />
  )
}

export default Canvas;
