module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
          firefox: '60',
          chrome: '67'
        },
        corejs: 2,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react'
  ]
};
