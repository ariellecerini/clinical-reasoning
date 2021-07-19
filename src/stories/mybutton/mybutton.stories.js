// import { storiesOf } from '@storybook/vue';
// // import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// import MyButton from './mybutton.vue';

// export default {
//   title: 'Storybook Knobs',
// //   decorators: [withKnobs],
// };

// // Assign `props` to the story's component, calling
// // knob methods within the `default` property of each prop,
// // then pass the story's prop data to the component’s prop in
// // the template with `v-bind:` or by placing the prop within
// // the component’s slot.
// export const exampleWithKnobs = () => ({
//   components: { MyButton },
//   props: {
//     isDisabled: {
//       default: boolean('Disabled', false),
//     },
//     text: {
//       default: text('Text', 'Hello Storybook'),
//     },
//   },
//   template: `<MyButton :isDisabled="isDisabled">{{ text }}</MyButton>`,
// });