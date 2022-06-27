import '../styles/HomePage.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/Novedaditem';


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [operations, setNovedades] = useState([]);

    useEffect (() => {
      const cargarNovedades = async () => {
        setLoading (true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/operations`);
        setNovedades(response.data);
        setLoading(false);
      };

      cargarNovedades();

    }, []);



  return (
    <section className="holder">
      <h2>Account Activity</h2>
    <table className='table'>
    <thead className='table_head'>
    <tr>
      <th scope="col" class="table_titles">Concept</th>
      <th scope="col" class="table_titles">Amount</th>
      <th scope="col" class="table_titles">Date</th>
      <th scope="col" class="table_titles">Type</th>
    </tr>
  </thead>
  <tbody>
        {loading ? (
          <p>Cargando...</p>
        ) : (
            operations.map(item => <NovedadItem key={item.id}
              concept={item.concept} amount={item.amount}
              date={item.date} type={item.type} />)
        )}
    </tbody>
    </table>
    </section>
  );
};

export default NovedadesPage;
