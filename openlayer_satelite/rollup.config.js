import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import styles from 'rollup-plugin-styles';

export default {
  input: 'src/main.js', // Your main JavaScript file
  output: {
    file: 'dist/bundle.js', // Output bundle file
    format: 'iife', // Immediately-invoked function expression
    sourcemap: true
  },
  plugins: [
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS modules to ES6
    styles(), // Handles CSS imports
    terser() // Minifies the bundle
    
  ]
};
