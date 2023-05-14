import { useState } from 'react'
import './App.css'

import BtnAddItem from './BtnAddItem';
import AddItem from './AddItem';
function App() {

  const [hex, SetHex] = useState('#000000');
  
  const randomHex = () => {
    const randomNumber = "#" + Math.floor(Math.random() * 16777215).toString(16);
    SetHex(randomNumber);
    addNewItem();
  }

  const [items, SetItems] = useState([]);
  function addNewItem() {
    const newItem = <AddItem color={hex} />
    SetItems([...items, newItem]);
  }


  return (
    <>
      <div className='bg-[#3f4e4f] 
   w-screen h-screen pt-6 overflow-x-hidden
   flex flex-col items-center'>
        <div onClick={randomHex}>
          <BtnAddItem>
          </BtnAddItem>
        </div>

        <div className='flex flex-wrap
         w-screen p-4 m-4
        justify-evenly'>
          {items.map((el, i) => <div
            className='' key={i}>{el}</div>)}
        </div>
      </div>
    </>
  )
}

export default App
