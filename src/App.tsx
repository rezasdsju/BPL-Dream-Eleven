import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Players from "./components/players/Players"
import { Suspense } from "react"
import type { Iplayer } from "./types/playerType"



const playersPromise = async():Promise<Iplayer[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}


function App() {
  console.log(playersPromise)
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Players playersPromise={playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
