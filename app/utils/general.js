export const getDevice = () => {
  const width = window.innerWidth;
  let device = 'desktop';

  if (width < 768 ) {
    device = 'mobile';
  } else if (width >= 768 && width < 992) {
    device = 'tablet';
  }
  return device;
}

export const isStaging = () => {
  const { pathname } = window.location;
  return pathname.includes('app-s');
}

export const formatCurrency = (num) => `$${  Number(num.toFixed(0)).toLocaleString()  } `
