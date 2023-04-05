module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: false,
      },
    ],
  ],
};
