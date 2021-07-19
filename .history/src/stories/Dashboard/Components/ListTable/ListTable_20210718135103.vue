<template>
  <div class="listTable">
    <ListItem v-bind="{ entry: 'this is an item' }" />
    <ListItem v-bind="{ entry: 'this is an item' }" />
    <ListItem v-bind="{ entry: 'this is an item' }" />
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
