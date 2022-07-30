var mongoose = require("mongoose");
var StudSchema = new mongoose.Schema(
  {
    sno: Number,
    sname: String,
    fees: Number,
    course: String,
  },
  { versionKey: false }
);
var StudentModel = mongoose.model("crudstarts", StudSchema);

mongoose.connect("mongodb://localhost:27017/crudins", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var newStud = new StudentModel({
  sno: 124545,
  sname: "nishchay",
  fees: 1254,
  course: "Node js",
});

newStud.save((error)=>{
    if (error == null) {
        console.log("Inserted");
      } else {
        console.log(error);
      }
      mongoose.disconnect();
});