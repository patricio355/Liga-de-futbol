const db = require("../models");


module.exports={
    //lista de equipos
    allcanchas: async (req,res) => {
        try {
        // en la variable data , traera todos los equipos que hay en la tabla EQUIPOS
		const data = await db.Canchas.findAll({
			
		});
        //esto es para mandar algun otro dato de utilidad en el json
        //aqui esta mandando la cantidad de equipos en count
		const count = data.length;

        // el res es para mandar el json como respuesta
		res.json({
			// count,
             
		     canchas: data,
		});
        //controlador de errores
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Error al obtener la lista de canchas.',
		});
	} 
       
    },

    // agregar mas funciones 

    oneCancha: async (req,res) =>{
        try {
            const equipoId = req.params.id; // Asumiendo que el ID del equipo está en los parámetros de la solicitud
        
            //busca un equipo de la tabla equipos y lo pone en la variable equipo
            const cancha = await db.Canchas.findByPk(equipoId);
        
            //en caso de que no exista , manda esto
            if (!cancha) {
              return res.status(404).json({ error: 'Cancha no encontrado' });
            }
            
            //devuelve el equipo
            res.json({ data : cancha });

        }
        catch (error) {
            console.error(error);
           
        } 

    }



}