import nucleus from '@nebula.js/nucleus/dist/nucleus';

import barchart from '@nebula.js/sn-bar-chart';
import linechart from '@nebula.js/sn-line-chart';
import sankeychart from '@nebula.js/sn-sankey-chart';

const n = nucleus.createConfiguration({
  context: {
    theme: 'dark',
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
    {
      name: 'sankeychart',
      load: () => Promise.resolve(sankeychart),
    },
  ],
});

export default n;
