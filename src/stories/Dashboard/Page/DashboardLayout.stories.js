import DashboardLayout from '../../../components/pages/DashboardLayout.vue';

export default {
    title: 'Dashboard/Dashboard Layout',
    component: DashboardLayout,
  //   argTypes: {
  //     title: { control: {type: 'String'}}
  //   },
  };
  
  const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DashboardLayout },
    template: '<dashboard-layout v-bind="$props" />',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    title: "Diabetes Review"
  };
  