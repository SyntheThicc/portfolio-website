import React from 'react';
import { useGlobalContext } from '../../Context';
import ConstructionImg from '../../assets/Images/construction.png';
import {
  CardWrapper,
  CardHeader,
  CardImage,
  CardFooter,
  CardTitle,
  CardLink,
  Banner,
  BorderImg,
} from './CardElements';
import { Underline } from '../../PageElements/GlobalElements';

const Card = ({ name, images, id }) => {
  const { closeSidebar } = useGlobalContext();
  return (
    <CardWrapper>
      {id > 4 && (
        <Banner>
          <BorderImg src={ConstructionImg} />
        </Banner>
      )}
      <CardHeader>
        <CardImage src={images[0]} />
      </CardHeader>
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <Underline />
        <CardLink onClick={closeSidebar} to={`/project/${id}`}>
          Details
        </CardLink>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
