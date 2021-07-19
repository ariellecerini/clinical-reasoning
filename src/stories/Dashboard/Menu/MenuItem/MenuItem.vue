<template>
  <div :class="classes" @click="onClick">{{ label }}</div>
</template>

<script>
import './Menu.css';
import '../../../assets/style.css'
// import '../../../assets/normalize.css'

export default {
  name: 'menu-item',

  props: {
    label: {
      type: String,
      required: true,
    },
    active:{
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: false,
    },
 
  },

  computed: {
    classes() {
      return {
        'nav-item': true,
        'nav-item-active': this.active,
        'nav-item-hover': this.hover
      };
    },
   
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
