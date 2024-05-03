import React from 'react';
import '../../App.css'
import PlaceList from '../../components/PlacesList/PlacesList.js'
import NavBar from '../../components/NavBar/NavBar.js'
import '../../components/NavBar/NavBar'


function Home() {
  return (
    <>
      <NavBar />
      <PlaceList />    
    </>
  )
}

export default Home
