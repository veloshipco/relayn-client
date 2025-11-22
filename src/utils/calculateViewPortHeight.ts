export const calculateViewPortHeight = () => {
  const innerHeight = window.innerHeight;
  const outerHeight = window.outerHeight;
  const clientHeight = document.documentElement.clientHeight;
  const screenHeight = window.screen.height;
  const isLongScreen = innerHeight > 1024;

  return { innerHeight, outerHeight, clientHeight, screenHeight, isLongScreen };
};
