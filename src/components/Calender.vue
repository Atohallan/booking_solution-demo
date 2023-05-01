<template>
  <div class="bg-color-primary rounded-lg" style="overflow-x: hidden">
    <v-row>
      <v-col cols="12">
        <p class="text-h6 font-weight-bold text-left px-2 py-2">
          Velg tidspunkt
        </p>
        <v-text-field
          density="compact"
          label="01/01/2005"
          v-model="_date"
          append-inner-icon="mdi-calendar-blank-outline"
          @click:append-inner="onClick"
        ></v-text-field>
        <v-btn
          block
          rounded
          color="amber"
          @click="onSubmit"
          v-if="clickedbtn === false"
          >Fortsette</v-btn
        >
        <v-dialog v-model="showDialog">
          <v-card>
            <vue-cal
              class="vuecal--date-picker"
              xsmall
              hide-view-selector
              :time="false"
              :todayButton="true"
              active-view="month"
              :disable-views="['week']"
              style="width: auto; height: 350px"
              @cell-click="logEvents"
            >
            </vue-cal>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { exchangeDate } from "../utils";

export default {
  data: () => ({
    showDialog: false,
    selectedEvent: {},
    clickedbtn: false,
    _date: "",
  }),

  mounted() {
    this._date = exchangeDate("").toString();
  },

  methods: {
    onClick() {
      this.showDialog = true;
    },

    logEvents(dateString: any) {
      this._date = exchangeDate(dateString).toString();
    },

    onSubmit() {
      this.clickedbtn = true;
      this.$emit("selectedCalender", this._date);
    },

    onCancel() {
      this._date = "";
      this.clickedbtn = false;
    },
  },

  components: { VueCal },
};
</script>
