"use client"
import { useState } from 'react';

export default function Equipment() {
    const [datos, setDatos] = useState({
        idEquip: '',
        tipEquip: '',
        nomEquip: '',
        idLin: undefined,
        idTrafo: '',
        idCt: '',
        idDist: '',
        // Añade más campos según sea necesario
      });
    
      const handleChange = (e) => {
        setDatos({
          ...datos,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/equipment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
        });
        console.log(datos);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="idEquip" value={datos.idEquip} onChange={handleChange} />
          <input type="text" name="tipEquip" value={datos.tipEquip} onChange={handleChange} />
          <input type="text" name="nomEquip" value={datos.nomEquip} onChange={handleChange} />
          <input type="text" name="idLin" value={datos.idLin} onChange={handleChange} />
          <input type="text" name="idTrafo" value={datos.idTrafo} onChange={handleChange} />
          <input type="text" name="idCt" value={datos.idCt} onChange={handleChange} />
          <input type="text" name="idDist" value={datos.idDist} onChange={handleChange} />
          {/* Agrega más campos aquí */}
          <button type="submit">Submit</button>
        </form>
      );

}