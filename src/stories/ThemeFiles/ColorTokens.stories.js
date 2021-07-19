import ColorTokens from './ColorTokens.vue';

export default {
  title: 'Theme Styles/Color Tokens',
  component: ColorTokens
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ColorTokens },
  template: '<color-tokens v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  entry: "Insert line-item here"
};

