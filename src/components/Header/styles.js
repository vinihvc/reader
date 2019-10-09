import styled from 'styled-components'
import { card, color } from '../../styles/theme'

export const Navbar = styled.header`
  background-color: ${card};
  width: 100%;
  padding: 1.5rem;

  .header {
    max-width: 1366px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${color};
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 700;
  }
`

export const List = styled.ul`
  list-style: none;
`
export const Item = styled.li`
  font-weight: 500;
  margin-left: 1rem;
  display: inline-block;

  a {
    font-size: 0.9rem;
  }
`
