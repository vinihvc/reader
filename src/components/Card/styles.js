import styled from 'styled-components'
import { card, color } from '../../styles/theme'

export const News = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  a {
    border-radius: 2px;
    background-color: ${card};
    display: inline-block;
    height: 210px;
    margin: 0 0.5rem 1rem 0.5rem;
    position: relative;
    flex: 1 1 350px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 20px;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: ${color};

    &:hover {
      transform: translateY(-5px);
    }
  }
`
