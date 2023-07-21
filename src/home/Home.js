import React, {useState, useEffect} from 'react';

import Phone from './Phone';

import {getAllPhones} from '../services/api';

function Home() {

    const[phones, setPhones] = useState([]);
//se apeleaza de fiecare data cand se incarca pagina
    useEffect(() => {
        handlePhones();
    }, []);

    async function handlePhones(){
        let data = await getAllPhones();
        console.log(data);
        setPhones(data);
        console.log(phones);
    }
  return (
    <div>
      <h1>Phones</h1>
      <p>
        <a className="button">Create New Phone</a>
      </p>
      <table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Model</th>
                <th>Pret</th>
            </tr>
        </thead>

    <tbody>
{/* e=element */}
        {/* {phones.length > 0 ? phones.map((e) => <Phone phone={e} />) :null}  */}
        {phones.length > 0 ? phones.map((e) => <Phone phone={e} key={e.id}/>) : null}
    </tbody>
    </table>
</div>
  );
}

export default Home;