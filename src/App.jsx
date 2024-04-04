import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Modal from "react-modal";

import { Card } from "./components/Card";
import { CardApi } from "./components/CardApi";
import produtos from "./constants/produtos.json";
import { api } from "./api/rmApi";
import style from "./App.module.css";
import { Alert } from "./components/Alert";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { CharCard } from "./components/CharCard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function App() {
  const [show, setShow] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");
  const [name, setName] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.getElementById("alert").style.display = "none";
    api
      .get(`/character/?page=${page}&name=${name}`)
      .then((response) => {
        if (!response.data.results) {
          console.log("Vazio");
        }
        setData(response.data.results);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setAlertMessage("Esta página não contém este personagem.");
          document.getElementById("alert").style.display = "block";
        }
        console.error(error);
      });
  }, [page, name]);

  return (
    <>
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <Alert message={alertMessage} />
        <h1>Exercícios de manutenção</h1>
        {show === "prod" && (
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.cardContainer}>
              {produtos.map((item) => {
                return (
                  <Card
                    name={item.name}
                    desc={item.desc}
                    value={item.value}
                    image={item.image}
                    key={item.id}
                    status={item.status}
                    category={item.category}
                  />
                );
              })}
            </div>
          </>
        )}
        {show === "api" && (
          <>
            <h2>Rick and Morty API</h2>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
            <div>
              <input
                type="text"
                placeholder="1/43"
                value={page}
                onChange={(event) => setPage(event.target.value)}
              />
              <input
                type="text"
                placeholder="Character name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className={style.cardContainer}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <CardApi
                      name={item.name}
                      desc={item.species}
                      value={item.gender}
                      image={item.image}
                      status={item.status}
                    />
                    <button onClick={() => {}}>Info</button>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {show === "map" && (
          <>
            <h2>Mapa</h2>
            <div>
              <MapContainer
                center={[-25.424571535256643, -49.27214469328663]}
                zoom={16}
                scrollWheelZoom={true}
                style={{ height: "80vh" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-25.424571535256643, -49.27214469328663]}>
                  <Popup>SENAI DE CRIA!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
