import React, { useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useApolloClient, gql } from '@apollo/client';
import styles from '../styles/home.module.css'

const PRODUCTS_QUERY = gql`
  query products {
    products {
      id
      name
    }
  }
`;

function Home() {
  const apolloClient = useApolloClient();

  useEffect(() => {
    apolloClient
      .query({
        query: PRODUCTS_QUERY,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
      axios.get('http://localhost:4000/space/3')
      .then(response => {
        console.log({ response });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <main className={styles.main}>
      <h1>Bienvenido al Reto</h1>

      <Button variant="contained">Hello World</Button>
      <p>
      Para que haya paz y equilibrio en la humanidad, solo un candidato debe aprobar el reto.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Demuéstrale a thanos que eres digno
        </p>
      </div>
    </main>
  )
}

export default Home
