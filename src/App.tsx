import React, { useEffect, useRef, useState } from "react";
import {
  CanvasContainer,
  GOLCanvas,
  MainContainer,
  MenuContainer,
  Title,
} from "./styled";

function App() {
  const COLUMNS = 150;
  const ROWS = 150;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [cells, setCells] = useState<Array<Array<number>> | undefined>(
    undefined
  );

  useEffect(() => {
    const rows: Array<Array<number>> = [];

    for (let i = 0; i < ROWS; i += 1) {
      const cols: Array<number> = [];
      for (let j = 0; j < COLUMNS; j += 1) {
        cols[j] = 0;
      }
      rows[i] = cols;
    }
    setCells(rows);
  }, []);

  useEffect(() => {
    if (!cells?.length || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) return;
  }, [cells, canvasRef]);

  return (
    <MainContainer>
      <Title>Game of life</Title>
      <CanvasContainer>
        <GOLCanvas ref={canvasRef}></GOLCanvas>
      </CanvasContainer>
      <MenuContainer></MenuContainer>
    </MainContainer>
  );
}

export default App;
