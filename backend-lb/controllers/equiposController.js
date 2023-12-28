const db = require("../models");


module.exports={
    //lista de equipos
    allTeams: async (req,res) => {
        try {
        // en la variable data , traera todos los equipos que hay en la tabla EQUIPOS
		const data = await db.Equipos.findAll({
			
		});
        //esto es para mandar algun otro dato de utilidad en el json
        //aqui esta mandando la cantidad de equipos en count
		const count = data.length;

        // el res es para mandar el json como respuesta
		res.json({
			// count,
             cantidad: count,
		     equipos: data,
		});
        //controlador de errores
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Error al obtener la lista de equipos.',
		});
	} 
       
    },

    // agregar mas funciones 

    oneTeam: async (req,res) =>{
        try {
            const equipoId = req.params.id; // Asumiendo que el ID del equipo está en los parámetros de la solicitud
        
            //busca un equipo de la tabla equipos y lo pone en la variable equipo
            const equipo = await db.Equipos.findByPk(equipoId);
        
            //en caso de que no exista , manda esto
            if (!equipo) {
              return res.status(404).json({ error: 'Equipo no encontrado' });
            }
            
            //devuelve el equipo
            res.json({ data : equipo });

        }
        catch (error) {
            console.error(error);
           
        } 

    }



}