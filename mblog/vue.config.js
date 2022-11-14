import { defineConfig } from '@vue/cli-service';

export default defineConfig({
  pluginOptions: {
    css: {
      loaderOptions: {
        sass: {
          // 这里的值是你的全局变量文件路径，如果有多个全局变量用逗号分割开即可，如：
          // data: `@import"~@/assets/scss/main.scss";@import"~@/assets/scss/mixins/util.scss"`
          data: '@import"~@/main.scss";'
        }
      }
    }
  }
});
