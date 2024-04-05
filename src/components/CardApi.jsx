import { Tilt } from "react-tilt";
import { Ball } from "./Ball";
import Draggable from "react-draggable";
{
  /* <Tilt
  options={defaultOptions}
  style={{ height: '100%', width: '100%' }}
>
</Tilt> */
}

/* eslint-disable react/prop-types */
export const CardApi = ({
  name,
  desc,
  value,
  image,
  status,
  species,
  type,
  gender,
  infoFunc,
}) => {
  return (
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
          <h1 style={{textWrap: "wrap"}}>{name}</h1>
        </div>
        <h2>{desc}</h2>
        <p>{value}</p>
        <p>{species}</p>
        <p>{type}</p>
        <p>{gender}</p>
        <img src={image} alt={name} width={"auto"} height={"auto"} />
        <button style={{display: "block"}} onClick={infoFunc}>More Info</button>
      </div>
  );
};
