import foodModel from '../models/food-model.js'; 
import fs from "fs"
const addFood = async (req, res) => {

  

  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to add food item." });
  }
}

const listFood = async(req,res)=>{
 try {
   const foods = await foodModel.find({});
   res.json({success:true,data:foods})
 } catch (error) {
  console.log(error)
 }
}

const removeFood = async (req,res)=>{
    try {
      const food = await foodModel.findById((req.body.id))
      fs.unlink(`upload/${food.image}`,()=>{})
      await foodModel.findByIdAndDelete(req.body.id)
      res.json({success:true,
        message:"Food Remove"
      })
    } catch (error) {
      console.log(error)
    }

}


export { addFood,listFood,removeFood};
