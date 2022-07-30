var mongoose = require("mongoose");
var StudSchema = new mongoose.Schema({
  sno: Number,
  sname: String,
  fees: Number,
  course: String,
});
var StudentModel = mongoose.model("crudstarts", StudSchema);

mongoose.connect("mongodb://localhost:27017/crudins", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var conn = mongoose.connection;
conn.on("connected",  ()=>{
  console.log("database is connected successfully");
});

StudentModel.find((error, data) =>{
  console.log("data : ", data);
  if (error == null) {
    console.log(data)
    console.log(data[5].sno)
  } else {
  }
  mongoose.disconnect();
});