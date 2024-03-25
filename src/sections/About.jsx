
// React Libraries
import { Link } from "react-router-dom"

// Assets
import AboutImg from "../assets/images/about-img.png"

//Icons
import VerticalArrow from "../assets/icons/vertical-arrow.svg"

function About() {
  return (
    <div className="mt-24">
        <h3 className="font-ssp text-[34px] font-bold text-[#00A41A] text-center">About</h3>
        <div className='px-4 md:px-12 flex flex-col md:flex-row'>
            <div className='-mt-6'>
                <h5 className='text-3xl md:text-2xl font-ssp font-bold text-[#011805] mt-8 md:mt-16 w-full md:w-[645px] leading-normal md:leading-8'>Welcome to Olusanmi&apos;s Studio</h5>
                <p className='mt-6 md:mt-3 font-ssp font-normal w-full md:w-[651px] leading-relaxed text-2xl text-[#002105]'>Welcome to the vibrant universe of Pelumi Olusanmi, a place where art transcends the ordinary. With each brushstroke, Pelumi transforms simple art-boards, clothing, and shoes into masterpieces of expression and color. Dive into a collection that challenges boundaries and invites you on a journey of visual delight.</p>
                <div className='mt-14'>
                <Link className="flex items-center gap-x-2.5 border border-[#00A41A] w-[360px] md:w-[180px] px-[30px] py-[12px] rounded-[10px]">
                    <p className="text-[19px] font-ssp font-semibold text-[#00A41A]">Read More</p>
                    <img className="" src={VerticalArrow} />
                </Link>
                </div>
            </div>
            <div className='w-11/12 md:w-3/6 ml-20 mt-4 md:mt-0 mb-10 flex self-center'>
                <img className='mt-4 w-full' src={AboutImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About