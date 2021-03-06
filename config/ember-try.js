/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { 
        'ember': '1.13.12'
      }
    },
    {
      name: 'ember-2.1.2',
      dependencies: {
        'ember': '2.1.2'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
