const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function androidManifestPlugin(config) {
  return withAndroidManifest(config, async (config) => {
    let androidManifest = config.modResults.manifest;
    androidManifest['application'] = androidManifest['application'].map((application) => {
      application['activity'].map((activity) => {
        if (activity.$['android:name'] === '.MainActivity') {
          activity.$['android:windowSoftInputMode'] = 'adjustNothing';
        }
        return activity;
      });

      return application;
    });

    return config;
  });
};
