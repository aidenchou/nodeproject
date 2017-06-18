var express = require('express');
var app = express(); 

var port = process.env.PORT;
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Event', eventRouter);
app.use('/Db', dbRouter);

app.get('/', function(req, res){
    //res.send('hallo world!');
    res.render('index',{ 
        list: ['first val', '2nd val', '3rd val'],
        nav: [{Link: 'Services', Text: '服 务'},
             {Link: 'Portfolio', Text: '组 合'},
             {Link: 'About', Text: '关 于'}, 
             {Link: 'Team', Text: '团 队'},
             {Link: 'Contact', Text: '联 系'},
             {Link: 'Event', Text: '事 件'}
        ]
        
    });
});

app.get('/routing', function(req, res){
    res.send('hallo routing!');
});

app.listen(port, function(err){
     console.log('The server is runnig on port:' + port);
});