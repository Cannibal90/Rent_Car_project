import styled from "styled-components";
import { CarCard } from "../../components/carCard";
import url from "../../images/home_background.jpg";

const CarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CarWrapper = styled.div`
  display: flex;
  margin: 0 11%;
  flex-wrap: wrap; //tutaj nastepuje przeniesienie do nowej lini
`;

export function Cars(props) {
  const numbers = [1, 2, 3, 4, 5];
  const list_car = {
    title: "Opel Insignia B",
    description: "opis auta",
    urls: url,
  };
  return (
    <CarContainer>
      <CarWrapper>
        {numbers.map((n) => (
          <CarCard key={n} {...list_car} />
        ))}
      </CarWrapper>
    </CarContainer>
  );
}
