
// React Libraries
// import { Link } from "react-router-dom"

// Assets
import StayConnectedImg from "../assets/images/connected-img.png"

// Icons
import TwitterLogo from "../assets/icons/twitter-logo.svg"
import InstaLogo from "../assets/icons/instagram-logo.svg"
import LinkedinLogo from "../assets/icons/linkedin-logo.svg"


function StayConnected() {
  return (
    <div className="mt-24">
        <h3 className="font-ssp text-[34px] font-bold text-[#00A41A] text-center">Stay Connected</h3>
        <div className='px-4 md:px-12 flex flex-col md:flex-row gap-x-14 mt-2 md:mt-8'>
          <div className='w-11/12 md:w-[606px] mt-4 md:mt-0 mb-10 flex self-center'>
            <img className='mt-4 w-full' src={StayConnectedImg} alt="" />
          </div>
          <div className='-mt-12'>
              <p className='mt-8 md:mt-16 font-ssp font-normal w-full md:w-[515px] leading-8 text-[19px] text-[#002105]'>Be part of Pelumi&apos;s artistic journey. Follow us on social media, and subscribe to our newsletter for exclusive updates, offers, and insights direct from the studio</p>
              <div className='mt-10 flex items-center'>
              <input type="text" className='block w-full md:w-11/12 rounded-lg border-2 border-[#E4E1E1] px-4 py-5 text-[16px] font-ssp text-[#011805] md:pl-8 placeholder:text-[#011805]' placeholder='Enter Your E-mail Address' />
              <button type='button' className='absolute text-[19px] bg-[#00A41A] text-[#FFF] font-ssp right-[18px] md:right-[92px] px-6 py-[18px] rounded-r-lg rounded-l-[32px]'>Subscribe</button>
              </div>
              <h5 className="font-ssp font-semibold text-[#011805] text-[19px] leading-6 mt-12">Follow Pelumi On:</h5>
              <div className="flex flex-row gap-5 mt-8">
                <img src={TwitterLogo} alt="" />
                <img src={InstaLogo} alt="" />
                <img src={LinkedinLogo} alt="" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default StayConnected