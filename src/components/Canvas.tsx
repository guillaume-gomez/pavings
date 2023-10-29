import { useRef, useEffect } from "react";
import { hexagone } from "./pavings";
import { renderSquare, renderRectangle } from "./pavings/pavingsRenderer";

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
      //renderSquare(context, width, height)
      renderRectangle(context, width, height);
      hexagone(context, { x: width-100, y: height -100 }, {color: "black", outline: "purple"}, 25);
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
