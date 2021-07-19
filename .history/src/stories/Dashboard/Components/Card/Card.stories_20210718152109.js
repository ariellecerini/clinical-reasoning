import CardComponent from './CardComponent.vue';

export default {
  title: 'Dashboard/Card Component',
  component: CardComponent
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardComponent },
  template: '<card-component v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  content: {
      this: "this is stuff"
  },
  
  
};

