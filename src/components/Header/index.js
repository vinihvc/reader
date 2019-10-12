import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, List, Item } from './styles'

export default function Header() {
  const auth = useSelector(state => state.login.isAuth)

  const userLinks = (
    <ul>
      <Item>
        <Link to="/profile" className="menu-user">
          username
        </Link>
      </Item>
    </ul>
  )

  const guestLinks = (
    <List>
      <Item>
        <Link to="/signup">Criar conta</Link>
      </Item>
      <Item>
        <Link to="/signin">Acessar conta</Link>
      </Item>
    </List>
  )

  return (
    <Navbar>
      <div>
        <Link to="/feed" className="menu-brand">
          reader
        </Link>
        {auth ? userLinks : guestLinks}
      </div>
    </Navbar>
  )
}
