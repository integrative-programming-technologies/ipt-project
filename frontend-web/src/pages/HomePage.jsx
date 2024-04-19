import React from 'react'
import { Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"
import { BiUser } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import COLORS from '../components/colors';

function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="container home-page__container">
        <h1 className="main__title">Welcome to Hamloy App!</h1>
      </div>
    </>
  )
}

export default HomePage
