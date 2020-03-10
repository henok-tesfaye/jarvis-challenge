import React, { useState, useEffect } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import styled from 'styled-components'

import { Image, Grid, Flex } from 'components'
import { getItems } from 'utils'
import Popup from 'components/Popup'

const Wrapper = styled(Flex)``

const GridWrapper = styled(Grid)`
  padding-top: 50px;
  padding-bottom: 50px;
`
const SortableComponent = props => {
  const [items, setItems] = useState(getItems(9))
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [replaceImage, setReplaceImage] = useState(false)
  const [oldImageIndex, setOldImageIndex] = useState(-1)
  const [newImageIndex, setNewImageIndex] = useState(-1)

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    setOldImageIndex(oldIndex)
    setNewImageIndex(newIndex)
    setIsModalOpen(true)
  }

  useEffect(() => {
    if (!replaceImage) return
    setItems(arrayMove(items, oldImageIndex, newImageIndex))
    // restore replace image state
    setReplaceImage(false)
  }, [replaceImage])

  return (
    <Wrapper alignItems='center' justifyContent='center' height={100}>
      <SortableList
        items={items}
        onSortEnd={handleSortEnd}
        axis='xy'
        helperClass='SortableHelper'
      />
      {isModalOpen &&
        <Popup
          imageA={items[oldImageIndex]}
          imageB={items[newImageIndex]}
          onOptionChoose={setReplaceImage}
          onModalClose={() => setIsModalOpen(false)}
        />}
    </Wrapper>
  )
}

const SortableItem = SortableElement(({ item }) => <Image width={200} height={200} image={item} />)

const SortableList = SortableContainer(({ items }) => {
  return (
    <GridWrapper numberOfColumns={3} gridGap={25} width={200}>
      {items.map((item, index) => (
        <SortableItem key={`${item.id}`} index={index} item={item} />
      ))}
    </GridWrapper>
  )
})

export default SortableComponent
