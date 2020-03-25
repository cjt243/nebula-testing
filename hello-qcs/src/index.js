/* eslint-disable */
import nucleus from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'https://ctripp-multi.us.qlikcloud.com/',
    webIntegrationId: 'ukVwmCGoPUKIoatCFvOTc1WRYgqETTc2',
    appId: '19e8984e-d436-4701-b47f-8e9c47486eb2',
  });

  const n = nucleus(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  n.render({element: document.querySelector('.object'),
  id: 'rnHVpse'});
}

run();
