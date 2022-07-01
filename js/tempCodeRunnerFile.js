fs.open("demo.txt", "r+", (err, fd) => {
  if (err) throw err;
  else {
    console.log("file opened successfully !!!");
  }
});