<template>
    <div class="board">
    {{ board }}
    </div>
  </template>
  
<script>
import { mapState } from 'vuex';
export default {
    computed: mapState(['board'])
}
</script>
  
  <style lang="css">
  .board {
    @apply p-4 bg-teal-dark h-full overflow-auto;
  }
  
  .task-bg {
    @apply pin absolute;
    background: rgba(0,0,0,0.5);
  }
  </style>
  