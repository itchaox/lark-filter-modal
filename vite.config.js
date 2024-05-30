/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 18:47
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-30 13:53
 * @desc       :
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { semiTheming } from 'vite-plugin-semi-theming';

const isReactBuild = process.env.BUILD_TARGET === 'react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    isReactBuild ? react() : vue(),

    semiTheming({
      theme: '@semi-bot/semi-theme-feishu-dashboard',
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5050,
    proxy: {
      '/api': 'https://api.apiusb.com/api/app?service=App.NumbersFormula.RandomNumberGenerator&num=8&min=7&max=15',
    },
  },

  // build: {
  //   lib: {
  //     entry: './src/index.js', // 入口文件
  //     name: 'MyComponent',
  //     fileName: (format) => `my-component.${format}.js`,
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ['react', 'react-dom'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM',
  //       },
  //     },
  //   },
  // },

  build: {
    lib: {
      entry: isReactBuild ? './src/react/index.js' : './src/vue/index.js',
      name: 'MyComponent',
      fileName: (format) => `my-component.${format}.js`,
    },
    rollupOptions: {
      external: isReactBuild ? ['react', 'react-dom'] : ['vue'],
      output: {
        globals: isReactBuild ? { react: 'React', 'react-dom': 'ReactDOM' } : { vue: 'Vue' },
      },
    },
    // outDir: isReactBuild ? 'dist/react' : 'dist/vue', // 指定输出目录
    outDir: isReactBuild ? 'dist/react' : 'dist/vue', // 指定输出目录
  },
});
