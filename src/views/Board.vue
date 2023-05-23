<template>
    <div class="board" >
        <button class="btn">click kochu</button>
    <div class="flex flex-row items-start">
        <div class="column" v-for="column of board.columns">
            <div class="flex items-center mb-2 font-bold">
                {{ column.name }}
            </div>
           <div class="list-reset">
                <div class="task" v-for="task of column.tasks">
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
.btn{
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.board {
    @apply p-4 bg-teal-dark h-full overflow-auto;
}
</style>
  