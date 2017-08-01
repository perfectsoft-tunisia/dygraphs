/* eslint-disable prefer-arrow-callback */

Package.describe({
  name: 'dygraphsjs:dygraphs',
  version: '2.1.0',
  summary: 'dygraphs is a fast, flexible open source JavaScript charting library.',
  documentation: 'README.md',
  git: 'git://github.com/danvk/dygraphs.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
  ], 'client');

  api.mainModule('index.es5.js', 'client');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'mongo',
    'random',
    'dispatch:mocha',
    'accounts-password@1.3.1',
    'practicalmeteor:sinon',
    'practicalmeteor:chai@2.1.0_1',
    'underscore'
  ], 'server');

  api.use('johanbrook:publication-collector');

  api.addFiles([
    'tests/publications.js',
    'tests/publication-collector.test.js'
  ], 'server');
});
