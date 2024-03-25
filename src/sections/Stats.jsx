import { useState, useEffect } from "react";
import HorizontalArrow from "../assets/icons/horizontal-arrow.svg";

function Stats() {
  const [projectCount, setProjectCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      if (projectCount < 200) {
        setProjectCount((prevCount) => prevCount + 1);
      }
    }, 10); // Adjust the interval to control the speed of counting

    const customerInterval = setInterval(() => {
      if (customerCount < 150) {
        setCustomerCount((prevCount) => prevCount + 1);
      }
    }, 10); // Adjust the interval to control the speed of counting

    const testimonialInterval = setInterval(() => {
      if (testimonialCount < 200) {
        setTestimonialCount((prevCount) => prevCount + 1);
      }
    }, 10); // Adjust the interval to control the speed of counting

    // Clear intervals on component unmount
    return () => {
      clearInterval(projectInterval);
      clearInterval(customerInterval);
      clearInterval(testimonialInterval);
    };
  }, [projectCount, customerCount, testimonialCount]);

  return (
    <div className="mt-20 flex flex-col md:flex-row justify-center">
      <div className="text-center px-10">
        <h4 className="font-ssp font-bold text-[28px] text-[#002105] leading-9">{projectCount}+</h4>
        <h5 className="font-ssp font-normal text-2xl text-[#002105] leading-8">Projects</h5>
      </div>
      <img className="w-4" src={HorizontalArrow} alt="" />
      <div className="text-center px-10">
        <h4 className="font-ssp font-bold text-[28px] text-[#002105] leading-9">{customerCount}+</h4>
        <h5 className="font-ssp font-normal text-2xl text-[#002105] leading-8">Customers</h5>
      </div>
      <img className="w-4" src={HorizontalArrow} alt="" />
      <div className="text-center px-10">
        <h4 className="font-ssp font-bold text-[28px] text-[#002105] leading-9">{testimonialCount}+</h4>
        <h5 className="font-ssp font-normal text-2xl text-[#002105] leading-8">Testimonials</h5>
      </div>
    </div>
  );
}

export default Stats;
