<script setup lang="ts">

import Nav from "~/components/Nav.vue";
</script>

<template>
  <div class="bg-gray-400">
    <div class="w-10/12 mx-auto min-h-screen">
      <NuxtRouteAnnouncer/>

      <NuxtLayout>
        <Nav></Nav>
        <div class="mt-5 bg-white p-5 rounded shadow">

          <NuxtPage></NuxtPage>
        </div>
      </NuxtLayout>
    </div>
  </div>

</template>

<style scoped>

</style>