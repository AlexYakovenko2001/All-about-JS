function betterThanAverage(classPoints, yourPoints) {
   classPoints.push(yourPoints)
   let sum = 0
   for (let i = 0; i < classPoints.length; i++) {
      sum += classPoints[i]
   }
   let average = sum / classPoints.length
   return yourPoints > average
}
