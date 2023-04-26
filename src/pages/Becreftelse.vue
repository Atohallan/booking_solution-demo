<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex apgn-center text-center fill-height">
      <v-row class="mx-2 my-1">
        <v-col cols="12">
          <h1 class="text-h6 font-weight-bold">
            Takk for din bestilling!
          </h1>
          <div class="text-subtitle-2">
            Du vil få en bekreftelse på SMS så snart vår verksteds-
            mester har fått sett på din booking. Du bil også få 
            tilsendt en påminnelse dagen før din time.
          </div>
        </v-col>

        <v-col cols="12">
            <p class="text-subtitle-1 font-weight-bold">- Regnr.: DP 26090</p>
            <p class="text-subtitle-1 font-weight-bold">- Dato: 17.08.2023</p>
            <p class="text-subtitle-1 font-weight-bold">
                - EU-kontroll opp til 3500kg
            </p>
            <p class="text-subtitle-1 font-weight-bold">
                - Pris: 1490,
              <p class="text-subtitle-1">
                (betales i kassa ved henting av bil)
              </p>
            </p>
        </v-col>

        <v-col cols="12" class="mt-15">
          <v-btn
            :ripple="false"
            height="72"
            min-width="164"
            color="grey"
          >
            <p style="color:black">TILBAKE TIL START</p>
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
    export default {
        data () {
            return {
                checkbox: false,
                checkbox1: false,
            }
        },
    }
</script>
