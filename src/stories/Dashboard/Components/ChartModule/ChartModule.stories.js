import ChartModule from './ChartModule.vue';

export default {
  title: 'Dashboard/ChartModule',
  component: ChartModule,
 
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChartModule },
  template: '<chart-module v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Medical History",
  contentType: "ListTable"
};

