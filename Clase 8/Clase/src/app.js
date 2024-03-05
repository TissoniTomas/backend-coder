import express from 'express';
import {router as UsuariosRouter} from "./routes/usuarios.router.js"



const PORT=3000;




const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", UsuariosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})




const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
