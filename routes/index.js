var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res, next) {     //used to be a get

    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
        return;
        }

        var query = "select first_name,last_name from actor;";
        connection.query(query,function(err, rows, fields) {
             //release connection
            if (err) {
            console.log("second error");
            console.log(err);
            res.sendStatus(502);
            return;
            }
            console.log("hello");
            console.log("result of searching: ");
            console.log(rows);
            res.json(rows); //send response
            connection.release(); //
        });
    });

});


router.post('/add', function(req, res, next){




   req.pool.getConnection( function(err,connection){
       if (err) {
            res.sendStatus(500);
        return;
        }

     var query =`INSERT INTO actor (first_name,last_name)
                VALUES (?,?)`;

     connection.query(query,[req.body.first_name,req.body.last_name],function(err, rows, fields){

    if (err) {
            console.log("second error");
            console.log(err);
            res.sendStatus(502);
            return;
            }


            res.json(rows); //send response
            connection.release();

    });

   });

});


module.exports = router;
