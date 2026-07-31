// @ts-check

/** @type {import('postcss-flexbugs-fixes').Options} */
const flexbugsFixesOptions = {};

/** @type {import('postcss-preset-env').pluginOptions} */
const presetEnvOptions = {
  autoprefixer: {
    flexbox: 'no-2009',
  },
  features: {
    'custom-properties': false,
  },
  stage: 3,
};

/** @type {import('@fullhuman/postcss-purgecss').PurgeCSSUserDefinedOptions} */
const purgeCssOptions = {
  css: [],
  content: [
    './actions/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './app/**/*.scss',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
  ],
  // also detect attribute selectors
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)|(?<=\[)[^\]]+(?=\])/g) || [],
  safelist: {
    standard: ['html', 'body'],
    deep: [],
    greedy: [],
  },
};

// base plugins that always run
/** @type {Array<string | [string, unknown]>} */
const plugins = [
  ['postcss-flexbugs-fixes', flexbugsFixesOptions],
  ['postcss-preset-env', presetEnvOptions],
];

// only add PurgeCSS in production builds
if (process.env.NODE_ENV === 'production') {
  plugins.push(['@fullhuman/postcss-purgecss', purgeCssOptions]);
}

const postCssConfig = {
  plugins,
};

export default postCssConfig;
