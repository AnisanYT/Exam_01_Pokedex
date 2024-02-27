import React from 'react';
import GetUsers from "../../components/users/getUsers";


const ObtenerUsuarios = () => {
    return (
        <div className="container">
            <h3>Uso de un componente externo</h3>
            <br/>
            <GetUsers />
        </div>
    );
}

export default ObtenerUsuarios;
