import React, {useEffect, useState} from 'react';
import {Picture} from '../components/Picture';
import {Button} from '../components/Button';

const REQUEST_URL = 'https://picsum.photos';
const WIDTH = 300;
const HEIGHT = 300;
const SCROLL_TO_TOP_BUTTON_THRESHOLD = 1000;

type Props = {
  pictureIds: number[];
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const PictureList = ({pictureIds}: Props) => {
  const [scrollToTopVisible, setScrollToTopVisible] = useState<boolean>(false);

  const onScroll = () => {
    if (window.pageYOffset > SCROLL_TO_TOP_BUTTON_THRESHOLD) {
      setScrollToTopVisible(true);
    } else if (scrollToTopVisible) {
      setScrollToTopVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div className="picture-list">
      {pictureIds.map(id => (
        <Picture key={id} src={`${REQUEST_URL}/id/${id}/${WIDTH}/${HEIGHT}`} />
      ))}
      <Button
        className="scroll-button"
        style={{opacity: scrollToTopVisible ? 1 : 0}}
        onClick={scrollToTop}
      />
    </div>
  );
};
