<template>
  <v-row>
    <v-col cols="12">
      <v-list v-model:opened="open">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          v-on:click="pushArray(item)"
        >
          <v-list-group :value="item">
            <template v-slot:activator="{ props }">
              <div class="list-wrapper">
                <div class="circle">{{ index + 1 }}</div>
                <v-list-item-title
                  v-text="item"
                  class="text-left px-3 font-weight-bold"
                ></v-list-item-title>
              </div>
              <temp-view v-if="item === seltext" :title="seltext" />
            </template>
          </v-list-group>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import TempView from "./Temp.vue";

export default {
  props: {
    codeflag: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    seltext: "",
    open: [0],
    items: ["Tjenester", "Tidspunkt", "Personinformasjon"],
  }),

  methods: {
    pushArray: function (title: string) {
      this.seltext = title;
    },
  },

  watch: {
    codeflag(newValue, oldValue) {
      console.log(this.codeflag);

      if (newValue !== oldValue && newValue === true) {
        this.open = [0];
      } else {
        this.open = [];
      }
    },
  },

  components: {
    TempView,
  },
};
</script>
