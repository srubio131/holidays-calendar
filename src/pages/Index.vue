<template>
  <q-page class="flex column flex-center">
    <div class="flex flex-end">
      <q-chip color="nacional" text-color="black">
        Festivos nacionales
      </q-chip>
      <q-chip color="autonomico" text-color="black">
        Festivos Autonómicos
      </q-chip>
      <q-chip color="local" text-color="black">
        Festivos Locales
      </q-chip>
    </div>
    <vue-cal
        :background="true"
        :time="false"
        :events="events"
        :selected-date="selectedDate"
        locale="es"
        active-view="month"
        hide-view-selector
        events-on-month-view
        out-of-scope-events
        :style="{ width: '95%' }">
    </vue-cal>
  </q-page>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/es.js'
import { HOLIDAYS_NACIONAL, HOLIDAYS_TYPES, HOLIDAYS_BY_CITY } from '../entities/holidays.entity'
import { getTeamByCity } from '../entities/team.entity'

export default {
  name: 'PageIndex',
  components: {
    VueCal
  },
  data: () => ({
    selectedDate: new Date()
  }),
  computed: {
    events () {
      const nacional = HOLIDAYS_NACIONAL.map((holidayDate) => this.createEvent(holidayDate, HOLIDAYS_TYPES.NACIONAL))
      const autonomico = []
      const local = []
      Object.keys(HOLIDAYS_BY_CITY).forEach((cityKey) => {
        const teamCurrentCity = getTeamByCity({ city: cityKey })
        HOLIDAYS_BY_CITY[cityKey][HOLIDAYS_TYPES.AUTONOMICO].forEach((holidayDate) => {
          teamCurrentCity.forEach((teamMemberName) => {
            autonomico.push(this.createEvent(holidayDate, HOLIDAYS_TYPES.AUTONOMICO, teamMemberName, cityKey))
          })
        })
        HOLIDAYS_BY_CITY[cityKey][HOLIDAYS_TYPES.LOCAL].forEach((holidayDate) => {
          teamCurrentCity.forEach((teamMemberName) => {
            local.push(this.createEvent(holidayDate, HOLIDAYS_TYPES.LOCAL, teamMemberName, cityKey))
          })
        })
      })
      return [...nacional, ...autonomico, ...local]
    }
  },
  methods: {
    createEvent (holidayDate, type, teamMemberName, cityKey) {
      const icon = '<i class="icon material-icons">face</i>'
      const contentText = type === HOLIDAYS_TYPES.NACIONAL ? 'Todos' : teamMemberName
      return {
        start: holidayDate,
        end: holidayDate,
        content: `${icon} ${contentText} (${cityKey ? cityKey : 'España'})`,
        class: type,
        deletable: false,
        resizable: false,
        draggable: false
      }
    }
  }
}
</script>
