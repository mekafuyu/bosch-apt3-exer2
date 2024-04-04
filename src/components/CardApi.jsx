import { Ball } from "./Ball";

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
        <h1>{name}</h1>
      </div>
      <h2>{desc}</h2>
      <p>{value}</p>
      <p>{species}</p>
      <p>{type}</p>
      <p>{gender}</p>
      <img src={image} alt={name} width={150} height={"auto"} />
    </div>
  );
};
