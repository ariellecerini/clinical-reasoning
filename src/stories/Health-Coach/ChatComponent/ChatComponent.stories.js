// Button.stories.js

import ChatComponent from './ChatComponent.vue';
import '../healthcoach.css';

export default { 
  component: ChatComponent,
  title: 'Health Coach App/Chat Component'
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { ChatComponent },
  props: Object.keys(argTypes),
  template: '<ChatComponent :class="chatclass">{{ slots }}</ChatComponent>',
});

//👇 Each story then reuses that template
export const Right = Template.bind({});
Right.args = { chatclass: 'chat right-chat', slots: "Placeholder" };

export const Left = Template.bind({});
Left.args = { chatclass: 'chat left-chat', slots: "Placeholder" };
