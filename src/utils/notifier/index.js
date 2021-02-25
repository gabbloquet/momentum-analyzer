import AWN from 'awesome-notifications';
// Set global options
let globalOptions = {
  icons: { enabled: false },
  position: 'top-right',
  animationDuration: 500,
};
// Initialize instance of AWN
export const notifier = new AWN(globalOptions);
