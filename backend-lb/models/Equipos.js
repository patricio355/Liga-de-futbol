module.exports = (sequelize, DataTypes) => {
    const Equipos = sequelize.define("Equipos", {
        id:{
            type: DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
        },
        lugar:{
            type: DataTypes.STRING,
        },
        color:{
            type: DataTypes.TEXT,
        },
        campeonatos:{
            type: DataTypes.TEXT,
        }
       
    },
    {
        tableName: "equipos",
        timestamps: false,
    }) 
    
    return Equipos;
    
   
}
