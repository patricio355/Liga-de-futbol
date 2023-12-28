module.exports = (sequelize, DataTypes) => {
    const Partidos = sequelize.define("Partidos", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        equipo1:{
            type: DataTypes.STRING,
        },
        equipo2:{
            type: DataTypes.STRING,
        },
        fecha_partido:{
            type: DataTypes.TEXT,
        },
        resultado:{
            type: DataTypes.TEXT,
        },
        penales:{
            type: DataTypes.TEXT,
        },
        cancha:{
            type: DataTypes.TEXT,
        },
        pendiente:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
       
    },
    {
        tableName: "partidos",
        timestamps: false,
    }) 
    
    return Partidos;
    
   
}
