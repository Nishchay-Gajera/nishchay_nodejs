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
var StudentModel = mongoose.model("crudstart", StudSchema);

mongoose.connect("mongodb://localhost:27017/crudins", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var newStud = new StudentModel({
  sno: 121,
  sname: "rohan",
  fees: 110000,
  course: "Python Django",
});

newStud.save((error)=>{
    if (error == null) {
        console.log("Inserted");
      } else {
        console.log(error);
      }
      mongoose.disconnect();
});