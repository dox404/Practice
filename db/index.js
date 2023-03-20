const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/myapp',{
    useNewUrlParser:true,
    useUnifiedtopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log('connection successfull')
}).catch((e)=>{
    console.log(e)
})
const EmpSchema = new mongoose.Schema({
    name: String,
    email:String
  })

  const Employee=new mongoose.model('Employee',EmpSchema)
  module.exports= Employee



