
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AngularFormRoleandEmployee/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AngularFormRoleandEmployee"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 597, hash: '59f29b02050e2c8dd8f2cba1e4f5d2a8891c5f187bd8537fde4d17e40499de52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1110, hash: 'c8038b0842f211876d0f71dc3a5956ea73fe20b3ebefe774fdfea358b7420f8a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2595, hash: '7e4b4c5cbfe9da36f9baa1c4b17f3c5747d013613aa6ea4acc9fdd64a894e01d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
