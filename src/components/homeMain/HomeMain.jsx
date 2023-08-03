import React, { useState } from 'react';
import { mainBgc } from './homeMain.module.css'
import portadaSW from '../../assets/portada_star_wars.jpg';
import clientAxios from '../../utils/clientAxios';
import Card from '../card/Card';
import { alertError } from '../../utils/alertCustom';
import { endPoints, messages } from '../../utils/constants';
import StarWarsAnimation from '../starWarsAnimation/StarWarsAnimation';

const HomeMain = () => {
  const [characterName, setCharacterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacterByName = async () => {
    setLoading(true);
    if (characterName.length === 0) return alertError(messages.fieldsIncomplete, 'upss');
    try {
      const {data} = await clientAxios.get(`${endPoints.searchCharacterByName}/?search=${characterName}`)
      setCharacters(data.results);
    } catch (error) {
      alertError(messages.searchCharacterFailGet,'Upss', console.log(error.message));
    } 
    setLoading(false)
  };

  const handleInputChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleSearch = () => {
    getCharacterByName();
  };

  return (
    <>
      
      <div className={`container-fluid ${mainBgc}`}>
        <div className=' mt-3 text-white'>
          <div className='m-4'>
            <h1 className='text-white textShadow'>Characters of <strong>Star Wars</strong></h1>
            <p className='text-white textShadow'>Here you can do a search by name of the existing characters of the <strong>Star Wars</strong> saga. This form only returns information that matches the search. the search field is required.</p>
          </div>
          <div className='m-4 d-flex justify-content-center'>
            <div className='col-8 col-lg-3 my-3 d-flex'>
              <input type="text" className="form-control" value={characterName} onChange={handleInputChange} required maxLength={25} placeholder="Enter character name"/>
              <button onClick={handleSearch} className='btn btn-dark border border-danger mx-3' disabled={loading}>
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>
          <div className='col-12 d-flex flex-wrap justify-content-center'>
            { 
              loading
              ? null
              : characters.length >= 1 && characters.map((character, i) => (<Card key={i} character={character} type='character' />))
            } 
          </div>
        </div>
      </div>
      <StarWarsAnimation />
    </>
  )
}

export default HomeMain;
