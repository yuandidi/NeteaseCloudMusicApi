require('./app.js')
process.on('uncaughtException', function (err) {
    console.log(err);
});