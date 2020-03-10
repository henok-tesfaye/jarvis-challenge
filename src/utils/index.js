const getRandomValue = () => {
  return Math.floor(Math.random() * 400) + 1
}

export const getItems = numberOfImages => Array.from({ length: numberOfImages }, (k, v) => v)
  .map((val, index) => ({
    title: `Item ${index}`,
    index: index,
    id: `Item-${index}`,
    imageSrc: `https://picsum.photos/180/180?random=${getRandomValue()}`
  }))
