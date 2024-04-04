/* eslint-disable react/prop-types */
export const Ball = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "100%",
        width: 20,
        height: 20,
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: 10,
      }}
    ></div>
  );
};
