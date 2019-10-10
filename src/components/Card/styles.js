import styled from 'styled-components'
import { card, color } from '../../styles/theme'

export const News = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  a {
    border-radius: 2px;
    background-color: ${card};
    display: inline-block;
    height: 350px;
    margin: 0 0.5rem 1rem 0.5rem;
    position: relative;
    max-width: 450px;
    flex: 1 1 350px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: ${color};

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    h1 {
      font-size: 20px;
      padding: 20px;
    }

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
  }
`
