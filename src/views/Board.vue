<template>
    <div class="board" >
    <div class="flex flex-row items-start">
        <div class="column" v-for="(column,$columnIndex) of board.columns" :key="$columnIndex">
            <div class="flex items-center mb-2 font-bold">
                {{ column.name }}
            </div>
           <div class="list-reset">
                <div class="task" v-for="(task,$taskIndex) of column.tasks" :key="$taskIndex">
                    <span class="w-full flex-no-shrink font-bold">
                        {{ task.name }}
                    </span>
                    <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
                        {{ task.description }}
                    </p>
                </div>
           </div>
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
.task{
    @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-gray-950 no-underline;
}
.column{
    @apply bg-gray-300 p-2 mr-4 text-left shadow rounded;
    min-width: 350px;
}
.board {
    @apply bg-teal-800 p-4  h-full overflow-auto;
}
.task-bg {
  @apply  absolute;
  background: rgba(0,0,0,0.5);
}
</style>
  