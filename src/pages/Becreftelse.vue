<template>
  <v-container class="fill-height content-wrap">
    <v-responsive class="d-flex apgn-center text-center fill-height">
      <v-row class="mx-3 my-1">
        <v-col cols="12" class="d-flex justify-center">
          <v-img contain width="100" height="100" src="@/assets/image5.png" />
        </v-col>
        <v-col cols="12">
          <p class="text-h6 font-weight-bold">Takk for din bestilling!</p>
          <p class="text-subtitle-1">
            Du vil få en bekreftelse på SMS så snart vår verksteds- mester har
            fått sett på din booking. Du bil også få tilsendt en påminnelse
            dagen før din time.
          </p>
        </v-col>
        <v-divider></v-divider>

        <v-col
          cols="12"
          v-for="(item, index) in booking_data"
          :key="index"
          class="text-left"
        >
          <p class="text-h6 font-weight-bold">{{ item.text }}</p>
          <div
            class="d-flex justify-space-between my-2"
            v-if="item.text !== 'Personinformasjon'"
          >
            <p v-if="item.text === 'Tjenester'">
              {{ item.selectedvalue.selectedItemTitle }}
            </p>
            <p v-if="item.text === 'Tjenester'" class="font-weight-bold">
              {{ item.selectedvalue.type_price }}
            </p>
            <p v-if="item.text === 'Tidspunkt'">{{ `Valgt dato` }}</p>
            <p v-if="item.text === 'Tidspunkt'" class="font-weight-bold">
              {{ item.selectedDate }}
            </p>
          </div>
          <div v-else>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.userInfo.fullname }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.userInfo.telephone }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.userInfo.epost }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.userInfo.regnumber }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.userInfo.kmstand }}
            </p>
            <p class="text-subtitle-1 font-weight-bold">
              {{ item.userInfo.info }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
export default {
  props: ["booking_data"],
};
</script>
