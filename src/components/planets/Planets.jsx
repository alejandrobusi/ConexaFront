import React, { useState, useEffect } from 'react';
import clientAxios from '../../utils/clientAxios';
import Card from '../card/Card';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { alertError } from '../../utils/alertCustom';
import { endPoints, messages } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navegate = useNavigate();
  const [buttonPageState, setButtonPageState] = useState({
    next: true,
    prev: true,
  });

  const getAllPlanets = async (page) => {
    try {
      setIsLoading(false);
      const { data } = await clientAxios.get(
        `${endPoints.listPlanets}/?page=${page}`
      );
      setPlanets(data);
      setButtonPageState({
        prev: data.previous !== null ? false : true,
        next: data.next !== null ? false : true,
      });
    } catch (error) {
      alertError(messages.genericFailGet,'Upss', () => navegate('/'));
    } finally {
      setIsLoading(true)
    }
  };

  useEffect(() => {
    getAllPlanets(page);
  }, [page]);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
          {!isLoading 
            ? (
              <LoadingScreen />
            ) : ( 
              <>
                <div className='mt-4'>
                  <h1 className='text-white textShadow'>Planets of <strong>Star Wars</strong></h1>
                  <p className='text-white textShadow'>Here you can see all the existing planets of the <strong>Star Wars</strong> saga. in total there are <strong>{planets.count}</strong> planets.</p>
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                  {planets.results.map((planet, i) => {
                    return <Card key={i} planet={planet} type='planet' />;
                  })}
                </div> 
                <div className='text-center mt-4'>
                  <button className='btn btn-dark btn-sm mx-1 border border-danger' disabled={buttonPageState.prev} onClick={() => setPage((prevState) => prevState - 1)}>
                    prev
                  </button>
                  <button className='btn btn-dark btn-sm mx-1 border border-danger' disabled={buttonPageState.next} onClick={() => setPage((prevState) => prevState + 1)}>
                    next
                  </button>
                  <p className='mt-2 text-secondary textShadow'><strong>Page: {page}</strong></p>
                </div> 
              </>
            )
          }
      </div>
    </div>
  )
}

export default Planets;

