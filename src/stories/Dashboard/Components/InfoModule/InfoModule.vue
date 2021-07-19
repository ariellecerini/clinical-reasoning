<template>
  <Card class="card">
    <h3 class="card-title dashboard">{{title}}</h3>
    <div v-if= "contentType === 'ListTable'">
      <ListTable v-bind="{content: content}" />
      </div>
  </Card>
</template>

<script>
import '../../dashboard.css';
import Card from '../Card/Card.vue';
import ListTable from '../ListTable/ListTable.vue'
// import '../../../assets/normalize.css'

// import '../../../assets/style.css'

export default {
  name: 'info-module',
  components: { Card, ListTable },
  props: {
    title: {
      type: String,
      required: true,
      default: "Insert Title Here"
    }, 
    content: {
      type: Array, 
      required: false

    },
    contentType:{
      type: String, 
      required: true, 
      default: 'ListTable'
    }
  },
};
</script>
