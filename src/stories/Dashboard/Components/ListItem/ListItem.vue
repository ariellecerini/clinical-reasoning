<template>
  <div>
    <p class="listItem">{{entry}}</p>
  </div>
</template>

<script>
import '../../dashboard.css';
// import '../../../assets/normalize.css'

// import '../../../assets/style.css'

export default {
  name: 'list-item',
  props: {
    entry: {
      type: String,
      required: true,
      default: "Insert Line Item Here"
    }
  },
};
</script>
