import './HeroSection.css'
import LeftImg from './../../assets/swiggyLImg.avif'
import RightImg from './../../assets/swiggyRImg.avif'
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.avif'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.avif'



const HeroSection = () => {

    const imgMap = [
        {
            id : 1,
            image : img1
        },
        {
            id : 2,
            image : img2
        },
        {
            id : 3,
            image : img3
        },
        {
            id : 4,
            image : img4
        }
    ]
    return(
        <div className="flex justify-center items-center w-full herosection-wrapper relative flex-col">
            <span className='text-white text-5xl herosection-text z-1 pt-20'>Order food & groceries. Discover best restaurants. Swiggy it</span>
            <img src={LeftImg} className='absolute left-img'/>
            <img src={RightImg} className='absolute right-img'/>
                <div className='w-100 h-12 bg-white mt-10 mb-5 rounded-xl'>
                    <input type='text' placeholder='Search for restaurant, items or more' className='w-full h-full outline-none p-5'></input>
                </div>
            
            <div className='flex z-1 mt-5'>
                {
                    imgMap.map((item)=> {
                        return(
                            <div key={item?.id}>
                                <img src={item?.image} className='w-70'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default HeroSection