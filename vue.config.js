const path = require('path');
const resolve = filePath => path.join(__dirname, './', filePath);
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    outputDir: 'docs',
    publicPath: '/Titans-UI/',
    devServer: { port: '3366' },
    pages: {
        index: {
            entry: resolve('story/main.ts'),
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Titans-UI'
        }
    },
    chainWebpack: config => {
        config.plugins
            .delete('prefetch-index')
            .delete('preload-index');
        config.plugin("stylelint").use(StylelintPlugin, [{
            files: ['src/**/*.vue', 'src/**/*.((s(c|a)|c)ss)', 'story/**/*.vue', 'story/**/*.((s(c|a)|c)ss)'],
            fix: true
        }]);
        config.resolve.alias
            .clear()
            .set('src', resolve('src'))
            .set('story', resolve('story'));
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "src/style/global-import.scss";`
            }
        }
    }
};
