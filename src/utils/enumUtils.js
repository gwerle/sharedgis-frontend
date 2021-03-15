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

export const formatSurfaceSituationEnum = (situation) => {
  switch (situation) {
    case 'EXCELENT':
      return 'Excelente'
    case 'GOOD':
      return 'Bom'
    case 'INTERMEDIATE':
      return 'Intermediário';
    case 'BAD':
      return 'Ruim'
    case 'VERY_BAD':
      return 'Muito Ruim'
    case 'HORRIBLE':
      return 'Horrível'
    case 'VERY_HORRIBLE':
      return 'Muito Horrível'
    case 'IMPASSABLE':
      return 'Não trafegável'

    default:
      return null
  }
}

export const formatByciclePathTypeEnum = (type) => {
  switch (type) {
    case 'CICLOVIA':
      return 'Ciclovia'
    case 'CICLOROTA':
      return 'Ciclorrota'
    case 'CICLOFAIXA':
      return 'Ciclofaixa';
    case 'COMPARTILHADA':
      return 'Via compartilhada com pedestres'

    default:
      return null
  }
}

export const formatRoadWayEnum = (way) => {
  if(way) {
    if(way === 'ONE_WAY') {
      return 'Mão Única'
    }

    if(way === 'BOTH_WAY') {
      return 'Mão Dupla'
    }
  }

  return null
}

export const formatSurface = (surface) => {
  switch (surface) {
    case 'ASPHALT':
      return 'Alfalto'
    case 'CONCRETE':
      return 'Concreto'
    case 'SETT':
      return 'Paralelepípedo';
    case 'COMPACTED':
      return 'Cascalho'
    case 'GROUND':
      return 'Chão batido'
    case 'GRASS':
      return 'Grama'

    default:
      return null
  }
}
