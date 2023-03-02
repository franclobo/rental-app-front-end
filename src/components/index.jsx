import React from 'react'
import ResponsiveAppBar from './navbar'
import Item from './item'
import '../styles/index.scss'

function Home() {
  return (
    <div className="home">
      <>
        <ResponsiveAppBar />
      </>
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Home
