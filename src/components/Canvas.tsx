import { useRef, useEffect } from "react";
import { square, triangle, diamond } from "./pavings";
import { renderSquare } from "./pavings/pavingsRenderer";

interface CanvasProps {
  width: number;
  height: number;
  background?: string;
  toggleFullScreen: (target: EventTarget) => void;
}

function Canvas({width, height, toggleFullScreen, background = "#797979"}: CanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if(!refCanvas.current) {
      return;
    }
    const context = refCanvas.current.getContext("2d");
    if(context) {
      context.clearRect(0, 0, width, height);
      //square(context, {x: 25, y: 100}, {color: "red", outline: "green"}, 50);
      //triangle(context, {x: 100, y: 100}, {color: "blue", outline: "purple"}, 50)
      //diamond(width, height, context, {x: 25, y: 100}, {color: "black", outline: "green"}, 75)
      renderSquare(context, width, height)
    }

  }, [refCanvas, width, height]);
  
  return (
    <canvas
      ref={refCanvas}
      width={width}
      height={height}
      style={{background}}
      onDoubleClick={(event) => toggleFullScreen(event.target)}
    />
  )
}

export default Canvas;
