import { CITIES } from './holidays.entity'

export const TEAM = [
  { name: 'Adrián', city: CITIES.MADRID },
  { name: 'Andrés', city: CITIES.MADRID },
  { name: 'Alba', city: CITIES.MADRID },
  { name: 'Briam', city: CITIES.MADRID },
  { name: 'Carolina', city: CITIES.VALENCIA },
  { name: 'Daniel', city: CITIES.GRAN_CANARIAS },
  { name: 'Diego', city: CITIES.MADRID },
  { name: 'Fer', city: CITIES.ALICANTE },
  { name: 'Germán', city: CITIES.VALENCIA },
  { name: 'Irene', city: CITIES.MADRID },
  { name: 'Kendra', city: CITIES.MADRID },
  { name: 'Sergio', city: CITIES.MADRID },
  { name: 'Valeria', city: CITIES.MADRID },
  { name: 'Vladi', city: CITIES.MADRID }
]

export const getTeamByCity = (({ city }) => {
  return TEAM.filter((t) => t.city === city).map((t) => t.name)
})
