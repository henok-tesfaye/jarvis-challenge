import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  display: inline-block;
  margin: 5px;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`

const Image = props => {
  const { image: { imageSrc, title }, height, width } = props
  return (
    <ImageWrapper height={height} width={width}>
      <Img src={imageSrc} alt={title} />
    </ImageWrapper>
  )
}
export default Image
