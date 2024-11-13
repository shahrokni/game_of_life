import styled from "styled-components";

export const MainContainer = styled.div`
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
`;

export const Title = styled.div`
  width: 100%;
  height: 100px;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 35px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const CanvasContainer = styled.div`
  width: 100%;
  height: 600px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

export const GOLCanvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
