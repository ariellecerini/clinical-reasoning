<template>
  <div class="card"><slot/></div>
</template>

<script>
import '../../dashboard.css'
// import '../../../assets/normalize.css'

// import '../../../assets/style.css'

export default {
  name: 'card',

  props: {
    content: {
      type: Array,
      required: true,
    }
  },
};
</script>
