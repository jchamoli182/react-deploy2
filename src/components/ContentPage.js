import React from 'react';
import HeadingComponent from './HeadingComponent';
import MainHeading from './MainHeading';
import ParagraphComponent from './ParagraphComponent';
import './ContentPage.css';
import WrapButton from './WrapButton';
import FramerButton from './FramerButton';
import ImageComponent from './ImageComponent';
const ContentPage = () => {
  return (
    <div className="main-header">
      <HeadingComponent />
      <MainHeading />
      <ParagraphComponent />
      <WrapButton />
      <FramerButton />
      <ImageComponent />
    </div>
  );
};

export default ContentPage;