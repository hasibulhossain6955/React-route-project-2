import { useEffect, useState } from "react";
import FavoriteCard from "../Component/Phones/FavoriteCard";


const Favorites = () => {

     const[favorites,setFavorites]=useState([])

     const[noFound,setFound]=useState(false)
     const [isShow,setIsShow]=useState(false)
     

     useEffect(()=>{
        const favoriteItem= JSON.parse(localStorage.getItem('favorite'))
       if(favoriteItem){
        setFavorites(favoriteItem)
       }else{
        
        setFound("No Data Found")
       }
     },[])

     const DeleteAllFavorite=()=>{
        localStorage.clear()
        setFavorites([])

     }
     
    return (
        <div>

                

            {noFound? <p className="flex items-center justify-center h-screen text-3xl">{noFound}</p>




                :
                <div>

                   {favorites.length>0 && <button onClick={DeleteAllFavorite} className="block px-5 mb-5 bg-green-300 mx-auto">Delete All Favorite</button>}

                 <div  className="grid grid-cols-2 gap-5">

                        {isShow?favorites.map(phone=><FavoriteCard  key={phone.id}phone={phone}></FavoriteCard>)
                           :
                          favorites.slice(0,2).map(phone=><FavoriteCard  key={phone.id}phone={phone}></FavoriteCard>)
                        
                        
                         }


             
             
                     </div>
                     {
                        favorites.length>2&&<button onClick={()=>setIsShow(!isShow)}  className="block px-5 mb-5 bg-green-300 mx-auto">{isShow?"See Less":"See More"}</button>
                
                     }
                
                 


                </div>}
        </div>
    );
};

export default Favorites;