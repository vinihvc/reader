import styled from 'styled-components'
import { card, color } from '../../styles/theme'

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .items {
    display: flex;
    justify-content: space-between;
    background-color: ${card};

    a {
      padding: 25px;
      display: flex;
      width: 100%;
      justify-content: center;
      color: ${color};
    }
  }
`