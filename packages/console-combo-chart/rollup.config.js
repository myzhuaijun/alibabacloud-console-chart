import generateRollupConfig, { plugins } from '../../rollup.config';

const { typescript, resolve, commonjs, autoExternal } = plugins;

const pluginsCb = ({ fmt, ts }) => {
  if (fmt === 'umd') {
    return [typescript(), resolve(), commonjs()];
  } else {
    return [typescript(), resolve(), commonjs(), autoExternal()];
  }
};

export default generateRollupConfig({
  formatArr: ['es', 'cjs', 'umd'],
  input: 'src/index.ts',
  plugins: pluginsCb,
});
