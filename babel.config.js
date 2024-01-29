module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@env': ['./src/utils/env/index'],
          '@modules': ['./src/modules/'],
          '@routes': ['./src/routes/'],
          '@components': ['./src/components/index'],
          '@images': ['./src/assets/images/index'],
        },
      },
    ],
  ],
};
