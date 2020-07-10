var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MoodyDB');
var db = mongoose.connection;

var Schema= mongoose.Schema;
// connect data base and check the connection
var db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
// create autho schema contain informations of users
const sadSchema = new Schema({
         song:String,
      singer:String,
      url:String
})
const happySchema = new Schema({
  song:String,
singer:String,
url:String
})
const romanticSchema = new Schema({
  song:String,
singer:String,
url:String
})
    
     const tarabSchema = new Schema({
  song:String,
singer:String,
url:String
})
const weddingSchema = new Schema({
  song:String,
singer:String,
url:String
})
const randomSchema = new Schema({
  song:String,
singer:String,
url:String
})
     




   const UserSchema2 = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    uploads:{
      type: [String] 
    },
    favorite:{
      type: [String] 
    },
    image:{
      type: [String]
    }
  });
  
  const Sad = mongoose.model('Sad', sadSchema);
  const Happy = mongoose.model('Happy', happySchema);
  const Wedding = mongoose.model('Wedding', weddingSchema);
  const Tarab = mongoose.model('Tarab', tarabSchema);
  const Romantic = mongoose.model('Romantic', romanticSchema);
  const Random = mongoose.model('Random', randomSchema);
  const User2 = mongoose.model('User2', UserSchema2);



  module.exports.Sad  = Sad;
  module.exports.Happy = Happy;
  module.exports.Wedding  = Wedding;
  module.exports.Tarab  = Tarab;
  module.exports.Romantic  = Romantic;
  module.exports.Random  = Random ;
  module.exports.User  = User2;


