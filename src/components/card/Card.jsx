import React from 'react';
import { Link } from 'react-router-dom';

const CardVehicle = (props) => {
  const { name, model, manufacturer, url } = props.data;

  const getUrlId = (url) => {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    const number = match[1];
    return number;
  };

  return (  
    <div className='card text-bg-secondary border border-danger col-11 col-md-5 col-lg-3 m-3 cardShadow'>
      <div className='card-header'>
        <h4 className='fw-bold'>{name}</h4>
      </div>
      <div className='card-body d-flex flex-column justify-content-between align-items-start'>
        <h5 className='card-title'>Model: {model}</h5>
        <p className='card-text'>
          This ship was made by <strong>{manufacturer}</strong>
        </p>
        <Link to={`/vehicle/${getUrlId(url)}`} className='btn btn-danger'>
          Show more...
        </Link>
      </div>
    </div>)
};

const CardCharacter = (props) => {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = props.data;


  return (  
    <div className='card text-bg-secondary border border-danger col-11 col-md-5 col-lg-3 m-3 cardShadow'>
      <div className='card-header'>
        <h4 className='fw-bold'>{name}</h4>
      </div>
      <div className='card-body d-flex flex-column justify-content-between align-items-start'>
        <h6 className='card-title'>Height: {height}</h6>
        <h6 className='card-title'>mass: {mass}</h6>
        <h6 className='card-title'>Hair color: {hair_color}</h6>
        <h6 className='card-title'>Skin color: {skin_color}</h6>
        <h6 className='card-title'>Eye color: {eye_color}</h6>
        <h6 className='card-title'>Birth year: {birth_year}</h6>
        <h6 className='card-title'>Gender: {gender}</h6>
      </div>
    </div>)
};

const CardFilms = (props) => {
  const { title, opening_crawl, director, producer, release_date } = props.data;

  return (  
    <div class="card text-bg-secondary border border-danger col-11 col-lg-10 my-3 cardShadow">
      <h3 class="card-header fw-bold">{title}</h3>
      <div class="card-body">
        <h4 className="card-text"><strong>Director</strong>: {director}</h4>
        <h4 className="card-text"><strong>Producer</strong>: {producer}</h4>
        <h4 className="card-text"><strong>Release date</strong>: {release_date}</h4>
        <blockquote className="blockquote mb-0">
          <p>{opening_crawl}</p>
          <footer className="blockquote-footer text-white"><cite title="Source Title">Opening Crawl</cite></footer>
        </blockquote>
      </div>
    </div>
  )
};

const CardPlanet = (props) => {
  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water} = props.data;

  const checkUnknown = (property) => {
    return property === 'unknown' ? 'we dont know yet' : property;
  };

  return (  
    <div className='card text-bg-secondary border border-danger col-11 col-md-5 col-lg-3 m-3 cardShadow'>
      <div className='card-header'>
        <h4 className='fw-bold'>{name}</h4>
      </div>
      <div className='card-body d-flex flex-column justify-content-between align-items-start'>
        <h6 className='card-title'>Rotation period: {checkUnknown(rotation_period)}</h6>
        <h6 className='card-title'>Orbital period: { checkUnknown(orbital_period)}</h6>
        <h6 className='card-title'>Diameter: {checkUnknown(diameter)}</h6>
        <h6 className='card-title'>Climate: {checkUnknown(climate)}</h6>
        <h6 className='card-title'>Gravity: {checkUnknown(gravity)}</h6>
        <h6 className='card-title'>Terrain: {checkUnknown(terrain)}</h6>
        <h6 className='card-title'>Surface water: {checkUnknown(surface_water)}</h6>
      </div>
    </div>)
};

const Card = (props) => {
  const type = props.type;
  const allTypesCard = [
    {
      type: 'vehicle',
      component: <CardVehicle data={props.vehicle} />
    },
    {
      type: 'character',
      component: <CardCharacter data={props.character} />
    },
    {
      type: 'film',
      component: <CardFilms data={props.film} />
    },
    {
      type: 'planet',
      component: <CardPlanet data={props.planet} />
    },
  ];

  return (
    <>
      {allTypesCard.find((comp) => comp.type === type)?.component}
    </>
  );
};

export default Card;
