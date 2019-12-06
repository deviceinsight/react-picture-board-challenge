import React, {useState} from 'react';
import './App.scss';
import {PictureList} from './containers/PictureList';
import {Button} from './components/Button';
import {shuffle} from './utils';

const PICTURE_IDS = new Array(100).fill(0).map((_, index) => index);

const App: React.FC = () => {
  const [pictureIds, setPictureIds] = useState<number[]>(PICTURE_IDS);

  const shufflePictureIds = () => {
    const randomIds = shuffle<number>(pictureIds);
    setPictureIds(randomIds);
  };

  return (
    <div className="App">
      <h1>
        <div>(In)finite Pictures!</div>
        <Button className="shuffle-button" onClick={shufflePictureIds}>
          Shuffle!
        </Button>
      </h1>
      <PictureList pictureIds={pictureIds} />
    </div>
  );
};

export default App;
