import { useCallback, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleDrag = useCallback((e: DraggableEvent, data: DraggableData) => {
    e.stopPropagation();
    setPosition({ x: data.x, y: data.y });
    console.log(data);
  }, []);

  return (
    <Draggable
      handle={`.handler`}
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
    >
      <div ref={nodeRef}>
        <div className="handler" style={{ backgroundColor: "red" }}>
          awefawef
        </div>
        <div>afjiowefjaioefiwoaefawiojfaiwoefaiwefjawioeiofeo</div>
      </div>
    </Draggable>
  );
}

export default App;
