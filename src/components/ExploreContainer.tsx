import './ExploreContainer.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from 'react';




interface ContainerProps { }
function Map(){
  const [map, setMap] = useState<google.maps.Map>();
const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

 }


const ExploreContainer: React.FC<ContainerProps> = () => {
  Map();
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey='AIzaSyAjypHVcWI9YPPwcj8IY4N-CDlxY4SfWTo' render={render} >
      <div  id='map'> 


    </div>
    </Wrapper>
  );
};

export default ExploreContainer;
