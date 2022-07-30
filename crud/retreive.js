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
  console.log(error);
  if (error == null) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].sno);
      console.log(data[i].sname);
      console.log(data[i].fees);
      console.log(data[i].course);
      console.log("...............");
    }
  } else {
  }
  mongoose.disconnect();
});