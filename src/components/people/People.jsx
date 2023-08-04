import React, { useState, useEffect } from 'react';
import clientAxios from '../../utils/clientAxios';
import Card from '../card/Card';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { alertError } from '../../utils/alertCustom';
import { endPoints, messages } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const People = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navegate = useNavigate();
  const [buttonPageState, setButtonPageState] = useState({
    next: true,
    prev: true,
  });

  const getAllCharacters = async (page) => {
    try {
      setIsLoading(false);
      const { data } = await clientAxios.get(
        `${endPoints.listCharacters}/?page=${page}`
      );
      setCharacters(data);
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
    getAllCharacters(page);
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
                  <h1 className='text-white textShadow'>Characters of <strong>Star Wars</strong></h1>
                  <p className='text-white textShadow'>Here you can see all the existing characters of the <strong>Star Wars</strong> saga. in total there are <strong>{characters.count}</strong> characters.</p>
                </div>
                <div className='d-flex flex-wrap justify-content-center animate__animated animate__bounceIn'>
                  {characters.results && characters.results.map((character, i) => {
                    return <Card key={i} character={character} type='character' />;
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

export default People;

