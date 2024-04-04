import { Tilt } from "react-tilt";
import { Ball } from "./Ball";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const CharCard = ({
  name,
  desc,
  value,
  image,
  status,
  species,
  type,
  gender,
}) => {
  return (
    <div
      id="modal"
      style={{
        // display: "none",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: 'coral'
      }}
    >
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        <div
          style={{
            backgroundColor: "gray",
            margin: 10,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <div style={{ display: "flex" }}>
            {status == "Alive" ? <Ball color="green" /> : <Ball color="red" />}
            <h1>{name}</h1>
          </div>
          <h2>{desc}</h2>
          <p>{value}</p>
          <p>{species}</p>
          <p>{type}</p>
          <p>{gender}</p>
          <img src={image} alt={name} width={150} height={"auto"} />
        </div>
      </Tilt>
    </div>
  );
};
