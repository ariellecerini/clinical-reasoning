import SidePanel from './SidePanel.vue';

export default {
  title: 'Dashboard/Menu/Side Panel',
  component: SidePanel,
//   argTypes: {
//     title: { control: {type: 'String'}}
//   },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SidePanel },
  template: '<side-panel v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  showing: true,
  title: "Diabetes Review"
};

