const {database} = require('../config/database');


const getTodos = (req,res) => {
    const query = 'SELECT * FROM tasks';
    try{
        const results = database.query(
            query,
            function(err, results, fields) {
                if(results.length > 0){
                    res.status(200).json(results);
                }
            }
        );
    } catch (err){
        res.status(500).json({
            status : 0,
            message : err,
            data : []
        });
    }

}

const addTodos = (req,res) => {
    const {message} = req.body;
    if(!message){
        res.status(400).json({
            status : 0,
            message : 'Missing input',
            data : []
        });
    } else {
        database.query('INSERT INTO tasks (message) VALUES (?)', [message,],(error,
        results) => {
            if (error) return res.json({ error: error });
            const query = 'SELECT * FROM tasks';
            try{
                const results = database.query(
                    query,
                    function(err, results, fields) {
                        if(results.length > 0){
                            res.status(200).json(results);
                        }
                    }
                );
            } catch (err){
                res.status(500).json({
                    status : 0,
                    message : 'Something went',
                    data : []
                });
            }
    
        });
    }
    
}


module.exports = {
    getTodos,
    addTodos,
}