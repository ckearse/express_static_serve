const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"));

// app.get('/', function(){
  
// });
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/users", function(req, res){
  var users_array = [
    {name: "Michael", email: "michael@codingdojo.com"}, 
    {name: "Jay", email: "jay@codingdojo.com"}, 
    {name: "Brendan", email: "brendan@codingdojo.com"}, 
    {name: "Andrew", email: "andrew@codingdojo.com"}
];

  console.log(users_array);

  res.render('users', {users: users_array});
})

app.listen(7777, function(){
  console.log('Express app started on port 7777');
});

console.log(__dirname);

