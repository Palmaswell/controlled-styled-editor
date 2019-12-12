const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$';

module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/file-mock.js',
  },
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)', '<rootDir>/node_modules/(?!(gatsby)/)'],
  setupFiles: ['<rootDir>/src/__mocks__/loadershim.js'],
}


