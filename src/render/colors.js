import { setCSSVar } from './../func/cssFuncs.js';

const colors = Object.freeze({
  'background': '#d7e5e5',
  'objects-cube': '#00ffed',
  'objects-coin': '#cccc00',
  'objects-wall-body': '#222222',
  'objects-wall-border': '#eeeeee',
  'objects-player': '#0087ff',
  'objects-spike': '#ff0000',
  'menu-background': '#6f738e',
});

// TODO: Refactor
for (const key in colors) {
  if (typeof colors[key] !== 'string') {
    continue;
  }
  const cssVarName = '--' + key + '-color';
  setCSSVar(cssVarName, colors[key])
}

export default colors;
