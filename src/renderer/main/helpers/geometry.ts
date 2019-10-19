export const doesAreaContain = (topLeft: ICoords, bottomRight: ICoords) => (point: ICoords) =>
  ((point.x >= topLeft.x && point.x <= bottomRight.x)
    && (point.y >= topLeft.y && point.y <= bottomRight.y))

export const pointsDiff = (a: ICoords, b: ICoords) => {
  const diffX = a.x - b.x
  const diffY = a.y - b.y
  return Math.sqrt(diffX * diffX + diffY * diffY)
}

export const areaCenter = (a: ICoords, b: ICoords): ICoords => ({
  x: (a.x + b.x) / 2,
  y: (a.y + b.y) / 2,
})
