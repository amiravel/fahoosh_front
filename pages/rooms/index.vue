<script setup lang="ts">

import Danger from "~/components/buttons/Danger.vue";
import Info from "~/components/buttons/Info.vue";
import { ref, onMounted } from 'vue';
import type {Room} from "~/models/Room";

const rooms = ref(null);
const loading = ref(true);

async function fetchData() {
  try {
    const response = await fetch('http://localhost:8000/api/rooms'); // Replace with your backend API
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    rooms.value = await response.json() as Room[];

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false; // Set loading to false once data is fetched or on error
  }
}

onMounted(fetchData);

function deleteRoom(id: number) {

}

</script>

<template>
    <div class="mt-5 bg-white p-4 rounded">
      <h1>List of rooms</h1>

      <table class="min-w-full table-auto border-collapse border border-gray-300" >
        <thead>
        <tr>
          <th class="px-4 py-2 border border-gray-300">Room Number</th>
          <th class="px-4 py-2 border border-gray-300">Status</th>
          <th class="px-4 py-2 border border-gray-300">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="room in rooms?.data" :key="room.id">
          <td class="px-4 py-2 border-r border-gray-300 h-100">{{room.room_number}}</td>
          <td class="px-4 py-2 border-r border-gray-300 h-100">{{room.status}}</td>
          <td class="flex justify-between px-4">
            <Danger :text="'delete'" @buttonClick="deleteRoom(room.id)"></Danger>
            <Info :text="'edit'"></Info>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>

</style>