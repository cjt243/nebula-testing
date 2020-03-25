import nucleus from '@nebula.js/nucleus/dist/nucleus';

import barchart from '@nebula.js/sn-bar-chart';
import linechart from '@nebula.js/sn-line-chart';

const n = nucleus.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(linechart),
    },
  ],
});

export default n;
