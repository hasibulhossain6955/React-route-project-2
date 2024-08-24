import React from 'react';
import swal from 'sweetalert';

const DetailsCard = ({phone}) => {

   
    console.log(phone)

    const{id,image,phone_name,brand_name,price,rating}=phone ||{}


    const handleFavorite =()=>{

          const addedFavoriteArray=[]



        const favoriteItem= JSON.parse(localStorage.getItem('favorite'))
        //when local Storgae is empty
        if(!favoriteItem){
               addedFavoriteArray.push(phone)
               localStorage.setItem('favorite',JSON.stringify(addedFavoriteArray))
               swal("Good job!", "Successfully added!", "success");
        }else{

          const isExits=favoriteItem.find(phone=>phone.id===id)
          if(!isExits){
            addedFavoriteArray.push(...favoriteItem,phone)
            localStorage.setItem('favorite',JSON.stringify(addedFavoriteArray))
            swal("Good job!", "Successfully added!", "success");
          }else{
            swal("Error!", "Already added!", "error");
          }
          
        }
        //localStorage.setItem('test',JSON.stringify([{name: "hasib"},{name:"rakib"}]))
    }
    return (
        <div className='items-center flex justify-center'>
             <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={image}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {phone_name}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        ${price}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
    onClick={handleFavorite}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-pink-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
     Add to favorites
    </button>
  </div>
              </div>  
        </div>
    );
};

export default DetailsCard;