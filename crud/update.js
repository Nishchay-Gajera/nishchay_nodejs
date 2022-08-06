const updateDocument = async(_id) =>{
  try{
      const result =await Playlist.findByIdAndUpdate({_id},{
          $set:{
              sname:"javascript"
          }
      },{
          new:true,
          useFindAndModify:false
      });
      console.log(result)
  }catch(err){
      console.log(err)
  }
}
updateDocument("62d7e222c7f373c372f78a00");
                    //or
//update
// const updating= Playlist.findOne({
//     sno: 121,
// });
// const update={fees:55000}
// updating.updateOne(update,afterupdate)
// function afterupdate(error){
//     if(error==null){
//         console.log("Updated Successfully")
//     }else{
//         console.log(error)
//     }
// }
