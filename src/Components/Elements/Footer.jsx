import { LogoImgURL } from "@/constants";


function Footer() {

  return (
    <>
      <div className="footer h-72 bg-gray-900 w-full">
        <div className="">
          <div className="  text-white p-20">
            <img
              className="w-20 h-20 rounded-full  "
              src={LogoImgURL}
              alt="FoodVille"
            />
            <h3 className="py-2">Online Food Ordering App</h3>
          </div>
          
        </div>
        <div className=" flex justify-center text-white bg-gray-800">
            <h2>@copyright 2024 FoodVille </h2>
          </div>
      </div>
    </>
  );
}

export default Footer;
