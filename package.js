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

  api.addFiles('css/dygraph.css');
  api.mainModule('index.es5.js', 'client');
});