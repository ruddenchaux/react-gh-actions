module.exports = {
  git: {
    commitArgs: '--no-verify'
  },
  github: {
    release: true
  },
  npm: {
    publish: false
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md'
    }
  }
};
