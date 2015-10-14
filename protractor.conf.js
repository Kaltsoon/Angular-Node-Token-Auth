exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/**/*.e2e.js'],
  framework: 'jasmine2'
};
