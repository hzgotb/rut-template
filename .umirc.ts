import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  /**
   * https://umijs.org/zh-CN/config#routes
   */
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/login', component: '@/pages/login' },
  ],
  /** https://umijs.org/zh-CN/plugins/plugin-antd */
  antd: {},
  /** https://umijs.org/zh-CN/plugins/plugin-esbuild */
  esbuild: {},
  /** https://umijs.org/zh-CN/plugins/plugin-layout */
  layout: {},
  ignoreMomentLocale: true,
  /** https://umijs.org/zh-CN/config#theme */
  theme: {},
});
