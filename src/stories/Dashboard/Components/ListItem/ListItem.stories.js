import ListItem from './ListItem.vue';

export default {
  title: 'Dashboard/ListItem',
  component: ListItem
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ListItem },
  template: '<list-item v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  entry: "Insert line-item here"
};

