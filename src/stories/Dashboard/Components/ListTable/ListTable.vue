<template>
  <div class="listTable" v-for="item in content" :key="item">
    <ListItem v-bind="{ entry: item }" />
  </div>
</template>

<script>
import '../../dashboard.css';
// import '../../../assets/style.css'
import ListItem from '../ListItem/ListItem.vue'
// import '../../../assets/normalize.css'

export default {
  name: 'list-table',
  components: { ListItem },
  props: {
    entry: {
      type: String,
      required: true,
    }, 
    content: {
      type: Array, 
      required: false
    }
  },
  computed: {
    info() {
      return {
        'this.entry': true
      };
    },
  }
};
</script>
