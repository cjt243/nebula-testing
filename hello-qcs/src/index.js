/* eslint-disable */
import nucleus from './configure';
import connect from './connect';

async function run() {
  const app1 = await connect({
    url: 'https://ctripp-multi.us.qlikcloud.com/',
    webIntegrationId: 'ukVwmCGoPUKIoatCFvOTc1WRYgqETTc2',
    appId: '19e8984e-d436-4701-b47f-8e9c47486eb2',
  });

  const app2 = await connect({
    url: 'https://ctripp-multi.us.qlikcloud.com/',
    webIntegrationId: 'ukVwmCGoPUKIoatCFvOTc1WRYgqETTc2',
    appId: '84de3f6f-2d12-4bf1-820f-e2dccaaf8d8c',
  });

  const n1 = nucleus(app1);
  const n2 = nucleus(app2);

  (await n1.selections()).mount(document.querySelector('.toolbar'));
  (await n2.selections()).mount(document.querySelector('.toolbar'));

  n1.render({element: document.querySelector('#chart2'),
  id: 'rnHVpse'})
  ;
  n2.render({element: document.querySelector('#chart1'),
  id: 'WZuQjV'})
  ;
}

run();
