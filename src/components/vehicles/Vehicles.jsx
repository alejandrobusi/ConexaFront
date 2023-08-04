import React, { useState, useEffect } from 'react';
import clientAxios from '../../utils/clientAxios';
import Card from '../card/Card';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { alertError } from '../../utils/alertCustom';
import { endPoints, messages } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navegate = useNavigate();
  const [buttonPageState, setButtonPageState] = useState({
    next: true,
    prev: true,
  });

  const getAllVehicles = async (page) => {
    try {
      setIsLoading(false);
      const { data } = await clientAxios.get(
        `${endPoints.listVehicles}/?page=${page}`
      );
      setVehicles(data);
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
    getAllVehicles(page);
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
                  <h1 className='text-white textShadow'>Vehicles of <strong>Star Wars</strong></h1>
                  <p className='text-white textShadow'>Here you can see all existing vehicles from the <strong>Star Wars</strong> saga. You can also view more detailed information about the vehicles, such as the movies they appear in and the drivers, by clicking <strong>Show more</strong>. in total there are <strong>{vehicles.count}</strong> vehicles.</p>
                </div>
                <div className='d-flex flex-wrap justify-content-center animate__animated animate__bounceIn'>
                  {vehicles.results && vehicles.results.map((vehicle, i) => {
                    return <Card key={i} vehicle={vehicle} type='vehicle' />;
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
  );
};

export default Vehicles;
