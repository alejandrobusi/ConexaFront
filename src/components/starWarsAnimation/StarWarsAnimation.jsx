import React from 'react';
import { containerDiv, starWars, title, paragraph} from './starWarsAnimation.module.css';

const StarWarsAnimation = () => {
  return (
    <div className={containerDiv}>
      <div className={starWars}>
        <h2 className={title}>Star wars Challenge Conexa</h2>
        <p className={paragraph}>
          It is a period of civil wars in the galaxy. A brave alliance of underground freedom fighters has challenged the
          tyranny and oppression of the awesome GALACTIC EMPIRE.
        </p>
        <p className={paragraph}>
          Striking from a fortress hidden among the billion stars of the galaxy, rebel spaceships have won their first
          victory in a battle with the powerful Imperial Starfleet. The EMPIRE fears that another defeat could bring a
          thousand more solar systems into the rebellion, and Imperial control over the galaxy would be lost forever.
        </p>
        <p className={paragraph}>
          To crush the rebellion once and for all, the EMPIRE is constructing a sinister new battle station. Powerful
          enough to destroy an entire planet, its completion spells certain doom for the champions of freedom.
        </p>
      </div>

    </div>
  )
}

export default StarWarsAnimation
