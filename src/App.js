import React, { useState } from 'react'
import ItemQuoites from './ItemQuoites'

 const App = () => {
     const [items, setItems] = useState([])
         const fetechData = () =>{
             return fetch("https://jsonguide.technologychannel.org/quotes.json")
             .then((Response) => Response.json())
             .then((data) =>{
                 setItems(data)})
            }
  return (
    <div>
        <button onClick={ () => fetechData()}>fetch</button>
        {items.map((item) => <ItemQuoites author={item.from} text={item.text}/>) }
        <ItemQuoites/>
    </div>
  )
}

export default App