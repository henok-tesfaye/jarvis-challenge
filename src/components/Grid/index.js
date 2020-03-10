import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-gap: ${props => props.gridGap || 10}px;
  grid-template-columns: repeat(${props => props.numberOfColumns}, ${props => props.width}px);
`
