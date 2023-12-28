module.exports = (sequelize, DataTypes) => {
    const Jugadores = sequelize.define("Jugadores", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
        },
        apellido:{
            type: DataTypes.STRING,
        },
        fecha_nacimiento:{
            type: DataTypes.TEXT,
        },
        dni:{
            type: DataTypes.INTEGER,
        },
        posicion:{
            type: DataTypes.TEXT,
        },
        pie:{
            type: DataTypes.TEXT,
        }
       
    },
    {
        tableName: "jugadores",
        timestamps: false,
    }) 
    
    return Jugadores;
    
   
}
