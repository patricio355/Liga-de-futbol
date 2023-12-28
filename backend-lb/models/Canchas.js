module.exports = (sequelize, DataTypes) => {
    const Canchas = sequelize.define("Canchas", {
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
        detalle:{
            type: DataTypes.TEXT,
        },
        ubicacion:{
            type: DataTypes.TEXT,
        }
       
    },
    {
        tableName: "canchas",
        timestamps: false,
    }) 
    
    return Canchas;
    
   
}
