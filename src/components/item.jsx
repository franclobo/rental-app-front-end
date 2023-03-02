import React from 'react'

function Item() {
  return (
    <div className="item">
      <img src="https://picsum.photos/200/300" alt="random" className="image"/>
      <div className="item-info">
        <div className="item_rating">
          <h1>Item</h1>
          <p>like</p>
        </div>
        <p className="description">Description</p>
        <p className="price">Price</p>
      </div>
    </div>
  )
}

export default Item

