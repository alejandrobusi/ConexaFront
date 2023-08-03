import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { endPoints, messages, urlImages } from '../../utils/constants';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import clientAxios from '../../utils/clientAxios';
import { useNavigate } from 'react-router-dom';
import { alertError } from '../../utils/alertCustom';
import { getRandomIndex } from '../../utils/getRandomIndex';

const VehicleDetaill = () => {
  const { id } = useParams();
  const navegate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState({});
  const [imgDefault] = useState(urlImages[getRandomIndex(urlImages)]);

  const getVehicleById = async (id) => {
    try {
      const { data } = await clientAxios.get(
        `${endPoints.vehicleById}/?id=${id}`
      );
      setVehicleData(data);
    } catch (error) {
      alertError(messages.genericFailGet, 'Upss', () => navegate('/'));
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getVehicleById(id);
  }, []);

  return (
    <div className='container'>
      <div className='row bg-secondary mt-4 text-white'>
        {!isLoading 
          ? 
            <LoadingScreen />
          :
            <>
              <div className='col-12 col-lg-6 p-0'>
                <img src={imgDefault} className='img-fluid' alt='' />
              </div>
              <div className='col-12 col-lg-6 d-flex flex-wrap'>
                <div className='col-12 col-lg-6'>
                  <h3 className='text-white border-bottom border-danger mt-3 mt-lg-0'><strong>Name:</strong> {vehicleData?.ship?.name}</h3>
                  <h4><strong>Model:</strong> {vehicleData?.ship?.model}</h4>
                  <h4 className='m-0'><strong>Characteristics:</strong></h4>
                  <ul>
                    <li><strong>Manufacturer:</strong> {vehicleData?.ship?.manufacturer}</li>
                    <li><strong>Length:</strong> {vehicleData?.ship?.length}m</li>
                    <li><strong>Max atmosphering speed:</strong> {vehicleData?.ship?.max_atmosphering_speed}m/s</li>
                    <li><strong>Cargo capacity:</strong> {vehicleData?.ship?.cargo_capacity}</li>
                    <li><strong>Vehicle class:</strong> {vehicleData?.ship?.vehicle_class}</li>
                    <li><strong>Passengers:</strong> {vehicleData?.ship?.passengers}</li>
                  </ul>
                </div>
                <div className='col-12 col-lg-6'>
                  <h3 className='text-white border-bottom border-danger'><strong>Films</strong></h3>
                  {
                    vehicleData?.films?.length === 0
                    ? (<p>No films records found for this ship</p>)
                    : (
                      vehicleData?.films.map((film, i) => {
                        return (
                          <ul>
                            <li key={`${i}_${film.title}`}><strong>Title:</strong> {film?.title}</li>
                            <li key={`${i}_${film.director}`}><strong>Director:</strong> {film?.director}</li>
                            <li key={`${i}_${film.producer}`}><strong>Producer:</strong> {film?.producer}</li>
                            <li key={`${i}_${film.release_date}`}><strong>Release date:</strong> {film?.release_date}</li>
                          </ul>
                        )
                      })
                    )
                  }
                </div>
                <div className='col-12 col-lg-6'>
                  <h4 className='m-0 text-white border-bottom border-danger'><strong>Pilots:</strong></h4>
                  {
                    vehicleData?.pilots?.length === 0
                    ? (<p>No pilot records found for this ship</p>)
                    : (
                      vehicleData?.pilots.map((pilot, i) => {
                        return (
                          <ul>
                            <li key={`${i}_${pilot.name}`}><strong>Name:</strong> {pilot?.name}</li>
                            <li key={`${i}_${pilot.height}`}><strong>Height:</strong> {pilot?.height}cm</li>
                            <li key={`${i}_${pilot.mass}`}><strong>Mass:</strong> {pilot?.mass}kg</li>
                            <li key={`${i}_${pilot.hair_color}`}><strong>Hair color:</strong> {pilot?.hair_color}</li>
                            <li key={`${i}_${pilot.skin_color}`}><strong>Skin color:</strong> {pilot?.skin_color}</li>
                          </ul>
                        )
                      })
                    )
                  }
                </div>
              </div>
            </>
        }
      </div>
    </div>
  );
};

export default VehicleDetaill;
