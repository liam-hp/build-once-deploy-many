module.exports = {
    branches: [{ name: 'main' }, { name: 'qa', prerelease: true }, { name: 'dev', prerelease: true }],
    plugins: [
      [
        '@semantic-release/github',
        {
          assets: [{ path: 'build.tar.gz', label: 'build.tar.gz' }],
        },
      ],
    ],
  };