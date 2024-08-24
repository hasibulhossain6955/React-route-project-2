import PhoneCard from "./PhoneCard/PhoneCard";


const Phones = ({phones}) => {

    console.log(phones)
    
    return (
        <div className="text-3xl  text-center mt-10">
            All Catagories Phone

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {
                    phones?.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard> )
                 }
           </div>

        </div>

        

    );
};

export default Phones;