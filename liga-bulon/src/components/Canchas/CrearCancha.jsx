import React, { useState } from 'react';

const CrearCancha = () => {
    const [cancha, setCancha] = useState({

        nombre: '',
        lugar: '',
        detalle: '',
        ubicacion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCancha({ ...cancha, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/canchas/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: cancha.nombre,
                    lugar: cancha.lugar,
                    detalle: cancha.detalle,
                    ubicacion: cancha.ubicacion,
                }),

            });

            console.log("termino")
            window.location.href = "/";
        } catch (error) {
            console.error('Error al crear la cancha:', error);
            alert('Hubo un error al crear la cancha. Por favor, intenta nuevamente.');
        }
    };

    return (
        <div>
            <h2>Crear Nueva Cancha</h2>

            <form onSubmit={handleSubmit}>


                <label>Nombre:</label>
                <input type="text" name="nombre" value={cancha.nombre} onChange={handleChange} />

                <label>Lugar:</label>
                <input type="text" name="lugar" value={cancha.lugar} onChange={handleChange} />

                <label>Detalle:</label>
                <input type="text" name="detalle" value={cancha.detalle} onChange={handleChange} />

                <label>Ubicación:</label>
                <input type="text" name="ubicacion" value={cancha.ubicacion} onChange={handleChange} />

                <button type="submit">Crear Cancha</button>

            </form>
        </div>
    );
};

export default CrearCancha;
