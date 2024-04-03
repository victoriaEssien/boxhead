

// Icons
import FacebookWhiteLogo from "../assets/icons/facebook-white-logo.svg"
import InstaWhiteLogo from "../assets/icons/instagram-white-logo.svg"
import TwitterWhiteLogo from "../assets/icons/twitter-white-logo.svg"
import WhiteVerticalArrow from "../assets/icons/white-vertical-arrow.svg"
import EnvelopeIcon from "../assets/icons/envelope.svg"


function Footer() {
  return (
    <div className="px-4 md:px-12 py-14 bg-[#003709] mt-14">
      <div className="flex flex-col md:flex-row gap-x-24">
      <div className="w-fit">
      <h1 className='font-rwp font-normal text-[32px] text-[#008916] leading-8'>BOXHEAD</h1>
      <p className="font-montserrat font-semibold text-[#FFFFFF] mt-16 md:mt-32 text-base md:text-[19px] leading-6">Subscribe to Our Weekly Newsletter</p>
      <div className='mt-4 flex items-center mb-14 mt:mb-0 mx-auto'>
        <input type="text" className='block w-[360px] md:w-[380px] px-4 py-4 text-[14px] font-montserrat text-[#220021] pl-6 placeholder:text-[#011805]' placeholder='Enter Your E-mail Address' />
        <button type='button' className='absolute bg-[#00A41A] left-[293px] md:left-[344px] px-8 py-[22px]'>
          <img className="w-[20px]" src={WhiteVerticalArrow} alt="" />
        </button>
        </div>
      </div>

      <div className="mb-14 mt:mb-0">
      <h5 className='font-montserrat font-semibold text-[19px] text-[#FAFAFA] leading-8 mb-7'>Company</h5>
      <ul className="text-[#FAFAFA] font-montserrat font-semibold text-base flex flex-col gap-6">
        <li>Home</li>
        <li>About Us</li>
        <li>Portfolio</li>
        <li>Commission</li>
        <li>Gallery</li>
      </ul>
      </div>

      <div className="mb-14 mt:mb-0">
      <h5 className='font-montserrat font-semibold text-[19px] text-[#FAFAFA] leading-8 mb-7'>Support</h5>
      <ul className="text-[#FAFAFA] font-montserrat font-semibold text-base flex flex-col gap-6">
        <li>Help Center</li>
        <li>Terms and Condition</li>
        <li>Privacy</li>
        <li>Feedback</li>
        <li>Contact Us</li>
      </ul>
      </div>

      <div>
      <h5 className='font-montserrat font-semibold text-[19px] text-[#FAFAFA] leading-8 mb-7'>Get In Touch</h5>
      <ul className="text-[#FAFAFA] font-montserrat font-semibold text-base flex flex-col gap-6">
        <li>Reach out to us today !</li>
        <li className="flex gap-x-1"><img src={EnvelopeIcon} alt="" />Support@boxhead.com</li>
      </ul>
      </div>
      </div>
      <hr className="mt-20" />
      <div className="flex flex-row justify-between items-center mt-10">
        <p className="text-[#FFFFFF] font-montserrat text-base font-normal">© 2024 | All Rights Reserved</p>
        <div className="flex flex-row gap-x-5">
          <img src={FacebookWhiteLogo} alt="" />
          <img src={InstaWhiteLogo} alt="" />
          <img src={TwitterWhiteLogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer