import url from "../../images/gandalf.jpg";
import { Title } from "../../components/Cards";
import { Link } from "react-router-dom";
import { Marginer } from "../../components/marginer";

export function UnautorizedPage(props) {
  return (
    <div>
      <img src={url} alt="unauthorized" />
      <Title>Error 403 - unauthorized!</Title>
      <Marginer direction="vertical" margin={40} />
      <Link to="/">
        <Title style={{ fontSize: "20px", color: "#9706eb" }}>
          Back to HomePage
        </Title>
      </Link>
    </div>
  );
}
