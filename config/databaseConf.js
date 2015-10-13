var conf;

switch(process.env.NODE_ENV){
  case 'test':
    conf = 'mongodb://localhost/test-test';
    break;

  case 'production':
    conf = '';
    break;

  default:
    conf = 'mongodb://localhost/test';
}

module.exports = conf;
