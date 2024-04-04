import { useState } from 'react'
import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import style from './App.module.css'

function App() {
  const [show, setShow] = useState("")

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div>
            {produtos.map((item) => {
              return(
                <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
              
            </div>
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
      <div>
              
              </div>
         </>
      }
    </div>
    </>
  )
}

export default App
