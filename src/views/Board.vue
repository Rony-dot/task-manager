<template>
    <div class="board" >
    <div class="">
        <div class="column" v-for="column of board.columns">
            <div class="">
                {{ column.name }}
            </div>
           <div class="list-reset">
                <div class="task" v-for="task of column.tasks">
                    <span class="">
                        {{ task.name }}
                    </span>
                    <p v-if="task.description" class="">
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
    .board {
        
    }
    .column {

    }
    .task {
        
    }
</style>
  