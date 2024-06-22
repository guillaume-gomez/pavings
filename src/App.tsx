import { useState, useRef } from "react";
import { useFullscreen } from "rooks";
import Canvas from "./components/Canvas";

function App() {
  const [width, setWidth] = useState<number>(250);
  const [height, setHeight] = useState<number>(250);
  const fullscreenContainerRef = useRef<Element>(null);
  const {
    isFullscreenAvailable,
    isFullscreenEnabled,
    toggleFullscreen,
  } = useFullscreen({ target: fullscreenContainerRef });

  return (
    <div className="bg-neutral">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold underline">
          Pavings (beta)
        </h1>
        <div>
          <label>Width</label>
          <input
            type="range"
            min={50}
            max={1000}
            value={width}
            className="range"
            onChange={(e) => setWidth(parseInt(e.target.value)) }
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="range"
            min={50}
            max={1000}
            value={height}
            className="range"
            onChange={(e) => setHeight(parseInt(e.target.value)) }
          />
        </div>
        <div ref={fullscreenContainerRef}>
          <Canvas
            width={width}
            height={height}
            background={"#ddd"}
            toggleFullScreen={toggleFullscreen}
          />
        </div>
      </div>
    </div>
  )
}

export default App
