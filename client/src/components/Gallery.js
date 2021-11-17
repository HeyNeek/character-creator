import React, {useState, useEffect} from 'react';
import Charactercard from './charactercard';

function Gallery(){

    const [characterList, setCharacterList] = useState([])
useEffect(() => {
    
    fetch("/player_characters").then((r) => {
      if (r.ok) {
        r.json().then((characters) => {
            setCharacterList(characters)
        });
      }
    });
  }, []);

  const list = characterList.map((character) => <Charactercard character = {character}/>);

    return(
        <div>
            <h1>Gallery</h1>
            {list}
        </div>
    )
}

export default Gallery;