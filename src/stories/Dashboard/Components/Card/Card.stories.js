import Card from './Card.vue';

export default {
  title: 'Dashboard/Card Component',
  component: Card
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  content: {
      this: "this is stuff"
  },
  
  
};

