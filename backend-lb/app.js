const express = require("express");
const app = express();
//sirve para poder que el front pueda buscar 
const cors = require('cors');
//inportar el enrutador
const equiposRoutes = require("./routes/equiposRoutes")
const jugadoresRoutes = require("./routes/jugadoresRoutes")
const canchasRoutes = require("./routes/canchasRoutes")
const partidosRoutes = require("./routes/partidosRoutes")
app.use(express.json());
// asegurate de que el cors este siempre antes de las rutas
app.use(cors({ origin: 'http://localhost:3000' }));
//aqui deben estar todas las rutas para mandar a el enrutador principal (equiposRoutes)
app.use("/api/equipos",equiposRoutes);

app.use("/api/jugadores",jugadoresRoutes);
app.use("/api/canchas",canchasRoutes);
app.use("/api/partidos",partidosRoutes);


//puerto en el que se abre el servidor back
app.listen(5000,(req,res)=>{
    console.log("conectado a 5000");
})
