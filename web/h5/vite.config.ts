import path from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
const resolve = (dir) => {
	return path.resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 更改输出目录
    outDir: resolve('../../dist/h5'),
  },
  plugins: [vue(), viteCommonjs()],
  optimizeDeps: {
    exclude: ['vue-demi', 'vue', 'vue2'],
  },
})
