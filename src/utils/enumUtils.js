export const formatInclinationEnum = (inclination) => {
  switch (inclination) {
    case 'LOW':
      return 'Baixo'
    case 'MEDIUM':
      return 'Médio'
    case 'HIGH':
      return 'Alto'

    default:
      return null
  }
}

export const formatBikeRacksConditionEnum = (bikeRacksCondition) => {
  switch (bikeRacksCondition) {
    case 'GOOD':
      return 'Bom'
    case 'MEDIUM':
      return 'Médio'
    case 'BAD':
      return 'Ruim'

    default:
      return null
  }
}

export const formatBoolean = (data) => {
  if (data === null) {
    return ''
  }

  if(data) {
    return 'Sim'
  }

  return 'Não'
}
