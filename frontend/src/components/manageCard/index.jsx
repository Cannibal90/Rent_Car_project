import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 500px;
  min-height: 850px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 3.5em;
  margin-bottom: 1.3em;

  &:hover {
    box-shadow: 0 0 33px rgba(0, 0, 0, 0.7);
  }

  &:focus {
    text-decoration: none;
    color: #000;
  }
`;

const TopContainer = styled.div`
  width: 100%;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 93%;
  background-color: rgba(87, 97, 100, 0.95);
  display: flex;
  flex-direction: column;
`;

const ManageThumbnail = styled.div`
  width: 100%;
  height: 48em;
  filter: opacity(0.42);

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  margin: 0;
  margin-top: 2%;
  font-weight: 500;
  color: #000;
`;

export function ManageCard(props) {
  const { urls, title } = props;
  var to = `/manage/${title.toLowerCase()}`;
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <CardContainer>
        <TopContainer>
          <BackgroundFilter>
            <ManageThumbnail>
              <img src={urls} alt="manage" />
            </ManageThumbnail>
          </BackgroundFilter>
          <Title>{title}</Title>
        </TopContainer>
      </CardContainer>
    </Link>
  );
}
