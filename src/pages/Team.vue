<template>
  <q-page padding>

    <div v-for="(member, index) of TEAM" :key="`member-${index}`" class="row">
      <q-input outlined readonly v-model="member.name" class="col" />
      <q-select filled readonly bottom-slots v-model="member.city" :options="CITIES_OPTIONS" label="Ciudad" :dense="false" :options-dense="false" class="col">
        <template v-slot:prepend>
          <q-icon name="place" @click.stop />
        </template>
      </q-select>
    </div>

  </q-page>
</template>

<script>
import { TEAM } from '../entities/team.entity'
import { CITIES_OPTIONS } from '../entities/holidays.entity'

export default {
  name: 'Team',
  data: () => ({
    TEAM,
    CITIES_OPTIONS
  }),
  computed: {
  }
}
</script>
