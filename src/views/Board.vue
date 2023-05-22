<template>
    <div class="board" >
    <div class="flex flex-row items-start">
        <div class="column" v-for="column of board.columns">
            {{ column }}
        </div>
    </div>
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
    .column {
        @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
        min-width: 350px;
    }
    .task-bg {
        @apply pin absolute;
        background: rgba(0,0,0,0.5);
    }
</style>
  