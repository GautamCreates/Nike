import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick=()=> {
        if(bigShoeImg !== imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl
        ${bigShoeImg===imgURL.bigShoe
        ?'border-[#FF6452]'
        :'border-transparent'
        } cursor-pointer max-sm:flex-1
    `} onClick={handleClick}>
        <div className='flex justify-center items-center bg-card bg-center'>
            <img src={imgURL.thumbnail} alt="" width={127} height={103}/>
        </div>

    </div>
  ) 
}

export default ShoeCard
