import React from "react";

function Phone({phone}) {
    return (
        <tr>
            <td>{phone.marca}</td>
            <td>{phone.model}</td>
            <td>{phone.pret}</td>

        </tr>
    );
}

export default Phone;