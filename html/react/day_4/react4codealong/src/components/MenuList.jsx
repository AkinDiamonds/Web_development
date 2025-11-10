import { useState } from "react"

function MenuList(items, addItem) {
    return(
        <div>
            <h2> Menu List</h2>
                {items.map(item => (<div key={item.id} className="menu">{item.name}   <span>{item.price}</span>   <button onClick={()=>addItem(item)}>Add to cart</button></div>))}
        </div>
    )
}

export default MenuList;