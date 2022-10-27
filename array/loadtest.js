const loadtest = require('loadtest');
const options = {
    url: 'http://localhost:3009/uk',
    concurrency:1000,
    maxRequests: 1000,
};
loadtest.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log(result)
    console.log('Tests run successfully');
});
