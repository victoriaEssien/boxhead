
// React Libraries
import { Link } from "react-router-dom"

// Assets
import ArtworkOne from "../assets/images/artwork-01.png"
import ArtworkTwo from "../assets/images/artwork-02.png"
import ArtworkThree from "../assets/images/artwork-03.png"
import ArtworkFour from "../assets/images/artwork-04.png"
import ArtworkFive from "../assets/images/artwork-05.png"
import ArtworkSix from "../assets/images/artwork-06.png"
import ArtworkSeven from "../assets/images/artwork-07.png"
import ArtworkEight from "../assets/images/artwork-08.png"
import ArtworkNine from "../assets/images/artwork-09.png"


//Icons
import VerticalArrow from "../assets/icons/vertical-arrow.svg"

function FeaturedArt() {
  return (
    <div className="mt-24">
        <h3 className="font-ssp text-[34px] font-bold text-[#00A41A] text-center">Featured Artworks</h3>
        <p className="text-[19px] font-ssp font-normal text-center mx-auto w-[923px] text-[#011805]">A curated selection showcasing the diverse range of Pelumi&apos;s talent. From bold artboards to painted apparel, discover the pieces that capture the imagination of art lovers worldwide.</p>

        <div className="flex flex-row justify-center flex-wrap w-fit gap-6 mt-16">
            <div className="">
                <img className="w-[380px] h-[258px] rounded-[10px]" src={ArtworkOne} alt="" />
                <img className="w-[380px] rounded-[10px] mt-10" src={ArtworkFour} alt="" />
            </div>
            <div>
                <img className="w-[380px] rounded-[10px]" src={ArtworkTwo} alt="" />
            </div>
            <div>
                <img className="w-[380px] rounded-[10px]" src={ArtworkThree} alt="" />
                <img className="w-[380px] h-[258px] rounded-[10px] mt-8" src={ArtworkFive} alt="" />
            </div>
            
            <div>
                <img className="w-[380px] h-[520px] rounded-[10px]" src={ArtworkSix} alt="" />
            </div>
            <div>
                <img className="w-[380px] h-[244px] rounded-[10px]" src={ArtworkSeven} alt="" />
                <img className="w-[380px] h-[244px] rounded-[10px] mt-8" src={ArtworkEight} alt="" />
            </div>
            <div>
                <img className="w-[380px] h-[520px] rounded-[10px]" src={ArtworkNine} alt="" />
            </div>
        </div>

        <Link className="flex items-center justify-center gap-x-2.5 mx-auto mt-12 mb-4 border border-[#00A41A] w-[360px] md:w-[217px] px-[30px] py-[12px] rounded-[10px]">
            <p className="text-[19px] font-ssp font-semibold text-[#00A41A]">See More</p>
            <img className="" src={VerticalArrow} />
        </Link>
        
    </div>
  )
}

export default FeaturedArt