import React from 'react'
import styled from 'styled-components'
import { Flex, Image, H2 } from 'components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

const Dialog = styled.div`
  max-width: 600px;
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const Button = styled.button`
  min-width: 100px;
  padding: 15px 30px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  &:focus {
    outline: none
  }
`

const Popup = props => {
  const { imageA, imageB, onOptionChoose, onModalClose } = props

  const handleOnButtonClick = option => {
    onOptionChoose(option)
    onModalClose()
  }

  return (
    <Overlay>
      <Dialog>
        <H2>
          Do you want to replace Image {<SmallImage image={imageA} />} with
          {<SmallImage image={imageB} />}
        </H2>
        <Flex justifyContent='center'>
          <Button onClick={() => handleOnButtonClick(true)}>Yes</Button>
          <Button onClick={() => handleOnButtonClick(false)}>No</Button>
        </Flex>
      </Dialog>
    </Overlay>
  )
}

const SmallImage = props => {
  return <Image height={50} width={50} image={props.image} />
}

export default Popup
