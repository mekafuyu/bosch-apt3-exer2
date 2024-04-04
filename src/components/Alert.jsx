/* eslint-disable react/prop-types */
export const Alert = ({ message }) => {
  const hideAlert = () => {
    document.getElementById("alert").style.display = "none";
  };

  return (
    <div
      id="alert"
      style={{
        display: "none",
        backgroundColor: "darkred",
        width: "36%",
        color: "white",
        position: "absolute",
        top: 0,
        left: "31%",
        borderRadius: "10px",
        borderStyle: "solid",
        borderColor: "red",
        padding: "1%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{message}</p>
        <button
          style={{
            backgroundColor: "darkred",
            width: "30px",
            height: "30px",
            color: "white",
            fontSize: 10,
            borderRadius: "10px",
            borderStyle: "solid",
            borderColor: "red",
            padding: "1%",
          }}
          onClick={hideAlert}
        >
          X
        </button>
      </div>
    </div>
  );
};
