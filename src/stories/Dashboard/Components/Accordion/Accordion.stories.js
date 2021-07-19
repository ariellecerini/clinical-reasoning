import Accordion from './Accordion.vue';

export default {
  title: 'Dashboard/Accordion',
  component: Accordion,
//   argTypes: {
//     title: { control: {type: 'String'}}
//   },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion },
  template: '<accordion v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  showing: true,
  title: "Diabetes Review", 
  desc: "insert desc", 
  content: "insert the content here"
};

