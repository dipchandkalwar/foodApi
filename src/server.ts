import app from "./app/app";

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server is running on port 5000");
})