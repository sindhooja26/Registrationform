import reg from '../common/registrationmodel'

export const Adddata=(req,res)=>{
    reg.create(req.body,(err,result)=>{
        if(err)
        {
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

 
export const Getdata=(req,res)=>{
 
    reg.find({"userName":req.body.userName,"Password":req.body.Password},(err,result)=>{
      if(err){  
        res.send(err);
      }else{
        console.log("enter correct details");
        res.send(result);
      }
    })
  }

 export const Updatedata=(req,res)=>{
     reg.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
         if(!err.isEmpty())
         {
             res.status(400).json({errors:errors.array() })
         }else{
             res.send(result)
         }
     })
 }

 export const DeleteData=(req,res)=>{
     reg.findByIdAndRemove(req.params.id,(err,result)=>{
         if(err)
         {
             res.send(err)
         }else{
             res.send(result)
         }
     })
 }