module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          components: './src/components',
          views: './src/views',
          utils: './src/utils',
          contexts: './src/contexts',
          hooks: './src/hooks',
          src: './src',
        },
      },
    ],
  ],
};
