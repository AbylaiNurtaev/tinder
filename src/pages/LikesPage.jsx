import React from 'react'
import LikesPopup from '../components/LikesPopup'
function LikesPage() {
    const users = [
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
        {
            name: "Екатерина", 
            distance: "1.3km",
            city: "Москва",
            photo1: "https://proteinfactory.com/wp-content/uploads/2019/06/david-laid.jpg",
            age: "18"
        },
    ]
  return (
    <div className='w-[90%] flex flex-col justify-start items-center'>
        <LikesPopup></LikesPopup>
        <p className='flex justify-start items-center gap-1 font-semibold text-[28px] text-gray w-[100%] text-start mt-[30px]'>Лайки <img className='w-[28px]' src="/images/icons/heart_red.png" alt="" /></p>
        <img src="" alt="" />
            <div className="flex mt-4 justify-between items-start w-[100%] flex-wrap">
            {
                users && users.map((elem, idx) => 
                        <div key={idx} className="relative flex justify-center items-center w-[165.5px] h-[220px] rounded-[16px]  mt-1" style={{ border: '1px solid #f2dddf', boxShadow: '0 2px 4px 0 rgba(139, 146, 159, 0.1), 0 8px 8px 0 rgba(139, 146, 159, 0.09), 0 18px 11px 0 rgba(139, 146, 159, 0.05), 0 32px 13px 0 rgba(139, 146, 159, 0.01), 0 50px 14px 0 rgba(139, 146, 159, 0)', background: '#feffff' }}>
                            <img src={elem.photo1} alt="photo" className='rounded-[8px] w-[146px] h-[204px] object-cover' />
                            <div className="flex justify-start items-center gap-1 absolute left-[12px] bottom-11">
                                <div className="text-red-500 bg-white rounded-[16px] h-[24px] w-[55px] text-center font-semibold">{elem.distance}</div>
                                <p className='flex justify-start items-center gap-1 text-white text-[14px] '><img src="/images/icons/location.svg" alt="" /> {elem.city}</p>
                            </div>
                            <div className="flex justify-start items-center gap-1 absolute left-[12px] bottom-3">
                                <h1 className='text-[20px] text-white font-semibold '>{elem?.name}</h1>
                                <h1 className='text-[20px] text-white font-semibold '>{elem?.age}</h1>
                            </div>
                        </div>
                )
            }
            </div>
    </div>
  )
}

export default LikesPage
