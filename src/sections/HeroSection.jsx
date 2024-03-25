
// Libraries
import { Link } from 'react-router-dom'

// Components
import MainNav from '../components/MainNav'

// Assets
import Hero from '../assets/images/hero.png'

function HeroSection() {
  return (
    <div>
        <MainNav />
        <div className='px-4 md:px-12 flex flex-col md:flex-row'>
            <div className='-mt-6'>
                <h1 className='text-3xl md:text-[64px] font-ssp font-bold text-[#011805] mt-8 md:mt-20 w-full md:w-[645px] leading-normal md:leading-[80px]'>Dare to Dream in Colors and Watch as We Make It Real.</h1>
                <p className='mt-6 md:mt-3 font-ssp font-semibold w-full md:w-[617px] leading-relaxed text-lg text-[#002105]'>Discover the unique world of Pelumi Olusanmi – a place where each brushstroke unfolds a narrative, weaving tales of dreams, emotions, and the unspoken language of art.   </p>
                <div className='mt-6'>
                <Link>
                  <button type='button' className='bg-[#00A41A] rounded-[10px] text-center block md:inline font-ssp text-white text-[19px] font-medium w-full md:w-[170px] px-[27px] py-[12px] md:mr-4 hover:bg-[#009919]'>Contact Us</button>
                </Link>
                <Link to='/login'>
                  <button type='button' className='border border-[#00A41A] rounded-[10px] text-center block md:inline font-ssp text-[#00A41A] text-[19px] font-medium w-full md:w-[200px] px-[27px] py-[12px] mt-4'>Explore Artwork</button>
                </Link>
                </div>
            </div>
            <div className='w-11/12 md:w-12/12 mr-18 mt-4 md:mt-0 mb-10 flex self-center'>
                <img className='mt-4 w-full' src={Hero} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection