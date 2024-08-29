const strings = {
  passwordChanged: {
    title: 'Password Changed!',
    subtitle: 'Your password has been changed successfully.',
    button: 'Back to login',
  },
} as const;

export type StringsType = typeof strings;

export default strings;
