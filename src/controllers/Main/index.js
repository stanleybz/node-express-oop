var main = function(req, res){
    res.type('text/html');
    res.status(200);
    res.send('<p>HELLO WORLD!</p>');
};
module.exports = main;
