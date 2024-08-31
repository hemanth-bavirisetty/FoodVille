import { CloudinaryImgURL } from "@/constants"
import {Link} from "react-router-dom"
import "../Styles/RestaurentCard.css"
export default function RestaurentCard(info){
    return(
        <>
        <Link to={`/restaurent/${info.id}`}>
        <div className="card justify-center flex flex-wrap">
            <img src={CloudinaryImgURL+info.cloudinaryImageId} alt="Pudding" className="img-1 rounded-3xl w-64" />
            <div className="details h-44 w-64 rounded-2xl">
            <span>
            <h1 className="title text-3xl font-extrabold my-2">{info.name}</h1>
            <h3 className="title text-xl font-bold">Price {info.costForTwo}</h3>
            <h4 className="cuisines text-l">{info.cuisines.join(", ")}</h4>
            </span>
            <h4 className="text-l  font-bold">{info.avgRating}</h4>
            </div>

        </div>
        </Link>
        </>
    )
}