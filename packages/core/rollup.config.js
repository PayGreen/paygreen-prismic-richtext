import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import { eslint } from "rollup-plugin-eslint";
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
// import url from '@rollup/plugin-url';


export default {
    input: './lib/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name: 'PaygreenRichtext',
            globals: {
                react: 'React',
            },
        },
        {
            file: pkg.module,
            format: 'es',
            globals: {
                react: 'React',
            },
        },
    ],
    external: ['react', 'prop-types', '@paygreen/paygreen-ui', 'prismic-reactjs', 'prismic-richtext',  'prismic-helpers'],
    plugins: [
        peerDepsExternalPlugin(),
        // eslint(),
        babel({
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
    ],
};
