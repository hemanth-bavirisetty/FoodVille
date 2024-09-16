import { CloudinaryImgURL } from "@/utils/constants";
import { ShoppingBagIcon } from "lucide-react";
import { ShimmerUI } from "@/Components/Elements";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "@/utils/useRestaurantMenuHooks";

export default function RestaurentMenu() {
  const { id } = useParams();
  const [info, menuItems] = useRestaurantMenu(id);

  const { name, city, areaName, cuisines, cloudinaryImageId } = info || {};

  return (
    <>
      <div className="body">
        <div
          className=" text-center p-10   rounded-2xl  "
          style={{
            backgroundColor: "rgb(234, 235, 235)",
            margin: "50px",
            borderRadius: "20px",
          }}
        >
          <h1 className="text-5xl font-bold py-3">{name}</h1>
          <h1 className="text-xl ">
            {areaName},{city}
          </h1>
          <h1 className="text-xl  text-green-800">{cuisines?.join(", ")}</h1>
        </div>
        {menuItems.length === 0 ? (
          <>
            <div className="Restaurents">
              {
                Array(5)
                  .fill()
                  .map((_, index) => (
                    <ShimmerUI key={index} />
                  )) /*render multiple shimmerui cards*/
              }
            </div>
          </>
        ) : (
          <div className="Restaurents flex flex-wrap justify-center ">
            {menuItems.map((element, index) => {
              return (
                <div
                  className="card justify-center flex flex-wrap m-2"
                  key={index}
                >
                  <img
                    src={
                      element.imageId
                        ? CloudinaryImgURL + element.imageId
                        : CloudinaryImgURL + cloudinaryImageId
                    }
                    alt={element.name}
                    className="img-1 rounded-3xl w-64"
                  />
                  <div className="details h-44 w-64 rounded-2xl">
                    <span>
                      <h1 className="title text-3xl font-extrabold my-2">
                        {element.name}
                      </h1>
                      <h3 className="title text-xl font-bold">
                        Price {(element.defaultPrice ?? element.price) / 100}
                      </h3>
                      <h4 className="title text-l  font-bold">
                        {element.description}
                      </h4>
                    </span>
                    <button className="btn btn-primary ">
                      <ShoppingBagIcon />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
