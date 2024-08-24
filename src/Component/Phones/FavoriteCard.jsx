import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const FavoriteCard = ({phone}) => {


    const{id,image,phone_name,brand_name,price,rating}=phone ||{}
    return (
        <div>
        <Card className="w-96">
  <CardHeader shadow={false} floated={false} className="h-96">
    <img
      src={image}
      alt="card-image"
      className="h-full w-full object-cover"
    />
  </CardHeader>
  <CardBody>
    <div className="mb-2 flex items-center justify-between">
      <Typography color="blue-gray" className="font-medium">
      {phone_name}
      </Typography>
      <Typography color="blue-gray" className="font-medium">
      {brand_name}
      </Typography>
      <Typography color="blue-gray" className="font-medium">
       ${price}
      </Typography>
     
    </div>
    <Typography
      variant="small"
      color="gray"
      className="font-normal opacity-75"
    >
      {rating}
    </Typography>
  </CardBody>
  <CardFooter className="pt-0">
    <Link to={`/phones/${id}`}>
    
    </Link>
  </CardFooter>
</Card>
    </div>
    );
};

export default FavoriteCard;