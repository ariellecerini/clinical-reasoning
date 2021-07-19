import DashboardHeader from './Header';

export default {
  title: 'Dashboard/Dashboard Header',
  component: DashboardHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DashboardHeader },
  template:
    '<dashboard-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
