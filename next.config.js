
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['fDhLUxYW8dUcRiPd39SGAH'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  