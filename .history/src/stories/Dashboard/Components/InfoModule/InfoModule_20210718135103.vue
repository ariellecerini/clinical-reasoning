<template>
  <CardComponent class="card">
    <h3 class="card-title dashboard">{{title}}</h3>
    <div v-if= "contentType === 'ListTable'">
      <ListTable />
      </div>
  </CardComponent>
</template>

<script>
import '../../dashboard.css';
import CardComponent from '../Card Component/CardComponent.vue';
import ListTable from '../ListTable/ListTable.vue'
// import '../../../assets/normalize.css'

// import '../../../assets/style.css'

export default {
  name: 'info-module',
  components: { CardComponent, ListTable },
  props: {
    title: {
      type: String,
      required: true,
      default: "Insert Title Here"
    }, 
    contentType:{
      type: String, 
      required: true, 
      default: 'ListTable'
    }
  },
};
</script>
