module.exports = {
  name: 'VanityEth',
  app: {
    type: 'DOCKER',
    envvars: 'XWDOCKERIMAGE=iexechub/vanityeth',
  },
  work: {
    cmdline: 'ace',
  }
};
