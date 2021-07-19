import TableItem from './Table.vue';

export default {
  title: 'Dashboard/Table',
  component: TableItem,
//   argTypes: {
//     title: { control: {type: 'String'}}
//   },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TableItem },
  template: '<table-item v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  showing: true,
  title: "Diabetes Review", 
  dataVals: [
    {
      "name": "steve", 
      "age": "30 years of age", 
      "occupation" : "teacher"
    },
    {
      "name": "jane", 
      "age": "20 years of age", 
      "occupation" : "teacher"
    },
    {
      "name": "rob", 
      "age": "25 years of age", 
      "occupation" : "teacher"
    },
    {
      "name": "tony", 
      "age": "34 years of age", 
      "occupation" : "teacher"
    },
    {
      "name": "beth", 
      "age": "32 years of age", 
      "occupation" : "teacher"
    }
  
  ]
};

