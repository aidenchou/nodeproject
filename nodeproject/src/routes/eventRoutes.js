var express = require('express');
var eventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


eventRouter.route('/')
    .get(function(req,res){
          var url = 'mongodb://localhost:27017/eventApp';
          mongodb.connect(url, function(err, db){
              var collection = db.collection('event');
              collection.find({}).toArray(function(err, results){
                    res.render('event',{ 
                        nav: [{Link: 'Services', Text: 'Services'},
                        {Link: 'Portfolio', Text: 'Portfolio'},
                        {Link: 'About', Text: 'About'}, 
                        {Link: 'Team', Text: 'Team'},
                        {Link: 'Contact', Text: 'Contact'},
                        {Link: 'Event', Text: 'Event'}
                        ],
                        event: results
            
                        });   
                });
        });
        
    });
 
 eventRouter.route('/:id')
 .get(function(req,res){
          var url = 'mongodb://localhost:27017/eventApp';
          mongodb.connect(url, function(err, db){
              var collection = db.collection('event');
              collection.find({}).toArray(function(err, results){
   
                   var id = req.params.id;
                    res.render('events',{ 
                     nav:  [{Link: 'Services', Text: '服 务'},
                            {Link: 'Portfolio', Text: '组 合'},
                            {Link: 'About', Text: '关 于'}, 
                            {Link: 'Team', Text: '团 队'},
                            {Link: 'Contact', Text: '联 系'},
                            {Link: 'Event', Text: '事 件'}
                         ],
                         event: results[id]
            
                    });
              });
              
          });
    });
module.exports = eventRouter;