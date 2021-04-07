import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;
`;

export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 4px;
  width: 60%;
  min-height: 50%;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
`;

export const CarGallery = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 800px;
  min-height: 100px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  margin: 0.5em;
  margin-top: 1.3em;
  padding: 0 1%;
`;

export const LeftInfo = styled.div`
  font-size: 26px;
  margin: 0;
  margin-right: 55%;
  min-width: 20%;
  font-weight: 600;
  color: #000;
`;

export const Title = styled.div`
  font-size: 26px;
  margin: 0;
  font-weight: 600;
  color: #000;
`;
