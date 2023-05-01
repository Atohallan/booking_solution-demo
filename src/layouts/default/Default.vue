<template>
  <v-app>
    <v-container class="page-container">
      <default-view />
    </v-container>

    <default-footer />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
import DefaultFooter from "./Footer.vue";
</script>
