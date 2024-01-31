module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '.test.tsx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    'src/(.*)': '<rootDir>/src/$1'
  }
};
