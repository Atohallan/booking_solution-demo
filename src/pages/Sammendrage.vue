<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex apgn-center text-center fill-height">
      <v-row class="mx-2 my-1">
        <v-col cols="auto">
          <h1 class="text-h6 font-weight-bold">
            Klikk på knappen under for å sende inn bookingen!
          </h1>
          <div class="text-subtitle-2">
            Ved å klikke på knappen Booking sendes din bestilling inn til oss.
            Om du ønsker å gå tilbale å endre på noe bruker du knappen tilbake.
          </div>
        </v-col>

        <v-col cols="10">
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

        <v-col cols="12">
            <v-checkbox v-model="checkbox">
                <template v-slot:label>
                    <div style="font-size: x-small">Bekreft vår privacy police for å bruke vår booking tjeneste.</div>
                </template>
            </v-checkbox>
            <v-checkbox v-model="checkbox1">
                <template v-slot:label>
                    <div style="font-size: x-small">Bekreft om du ønsker viktig info og reklame fra oss.</div>
                </template>
            </v-checkbox>
        </v-col>

        <v-col cols="12">
            <v-btn block rounded="xl" color="amber"
                >Booking</v-btn> <br/>
            <v-btn block rounded="xl" color="white"
                >Tilbake</v-btn>
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
