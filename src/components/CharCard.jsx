import { Tilt } from "react-tilt";
import { Ball } from "./Ball";
import Draggable from "react-draggable";

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
  char,
}) => {
  return (
    <div
      id="modal"
      style={{
        width: "100%",
        height: document.body.scrollHeight,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "none"
      }}
    >
      <Draggable>
        <div
          style={{
            backgroundColor: "gray",
            margin: 10,
            padding: 10,
            borderRadius: 10,
            width: 'fit-content'
          }}
          id={'charCard'}
        >
          <div style={{ display: "flex" }}>
            {char.status == "Alive" ? <Ball color="green" /> : <Ball color="red" />}
            <h1>{char.name}</h1>
          </div>
          <h2>{char.desc}</h2>
          <p>{char.value}</p>
          <p>{char.species}</p>
          <p>{char.type}</p>
          <p>{char.gender}</p>
          <div width="100%">
            <Tilt options={defaultOptions} style={{width: 'auto'}}>
              <img src={char.image} alt={char.name} height={"auto"} />
            </Tilt>
          </div>
          <button onClick={() => {document.getElementById('modal').style.display = 'none'}}> Close </button>
        </div>
      </Draggable>
    </div>
  );
};
