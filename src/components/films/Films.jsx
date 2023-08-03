import React, { useState, useEffect } from 'react';
import clientAxios from '../../utils/clientAxios';
import Card from '../card/Card';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { alertError } from '../../utils/alertCustom';
import { endPoints, messages } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navegate = useNavigate();

  const getAllFilms = async () => {
    try {
      setIsLoading(false);
      const { data } = await clientAxios.get(
        `${endPoints.listFimls}`
      );
      setFilms(data);
    } catch (error) {
      alertError(messages.genericFailGet,'Upss', () => navegate('/'));
    } finally {
      setIsLoading(true)
    }
  };

  useEffect(() => {
    getAllFilms();
  }, []);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
          {!isLoading 
            ? (
              <LoadingScreen />
            ) : ( 
              <>
                <div className='mt-4'>
                  <h1 className='text-white textShadow'>Films of <strong>Star Wars</strong></h1>
                  <p className='text-white textShadow'>Here you can see all the existing films of the <strong>Star Wars</strong> saga. in total there are <strong>{films.count}</strong> films.</p>
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                  {films.results.map((film, i) => {
                    return <Card key={i} film={film} type='film' />;
                  })}
                </div> 
              </>
            )
          }
      </div>
    </div>
  )
}

export default Films;
