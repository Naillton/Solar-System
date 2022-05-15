import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />
        ))}
      </div>
    );
  }
}
// para conseguir receber o problema de lint fui na mentoria do vitu e entendi como devo formar o map.
export default SolarSystem;
