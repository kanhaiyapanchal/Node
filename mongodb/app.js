const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the hell!!!");
})

app.get("/add/:type", (req, res) => {
    var type = req.params.type;
    const { client } = require('./db/connect');
    async function run(type) {
        try {
            const database = client.db('testdb');
            const userMaster = database.collection('users_master');

            // Query for a movie that has the title 'Back to the Future'

            const query = [
                { name: 'mahesh', age: '22', email: 'mahesh@gmail.com' },
                { name: 'vijay', age: '22', email: 'aa@gmail.com' },
                { name: 'rajesh', age: '85', email: 'vv@gmail.com' },
                { name: 'dipuu', age: '36', email: 'rr@gmail.com' },
                { name: 'jitu', age: '25', email: 'hh@gmail.com' },
            ];
            let user= 'Please define any type'
            if(type = '1'){
                 user = await userMaster.insertOne(query[0]);
            }else if (type ='multi') {
                 user = await userMaster.insertMany(query);
            }
            console.log(user);

        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run(type).catch(console.dir);
    res.send("<h1>User Added success</h1>");

})

app.get('/find/:age',function(req,res){
    age = req.params.age;
    const { client } = require('./db/connect');
    const database = client.db('testdb');
    const userMaster = database.collection('users_master');
    userMaster.findOne({age:age})
    .then(result=>res.send(result))
    .catch(err=>console.log(err));

});







const port = 4030;
app.listen(port, function () {
    console.log('server running.. 4030');
})