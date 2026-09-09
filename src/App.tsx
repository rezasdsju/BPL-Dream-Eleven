import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Players from "./components/players/Players"
import { Suspense, useState } from "react"
import type { Iplayer } from "./types/playerType"



const playersFetch = async():Promise<Iplayer[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}


function App() {
  // console.log(playersPromise)
  const [playersPromise] = useState(playersFetch())
  const [coin, setCoin] = useState<number>(10000)
  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Players coin={coin} setCoin={setCoin} playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
