import {useRouteError} from "react-router-dom"
export default function Error(){
    const err = useRouteError();
    console.log(err)
    return(
        <>
        <div className="error text-center p-5 m-5 bg-red-700 text-white">
            <h1 className="text-xl">status - {err.status} : {err.statusText}</h1>
           <h2 className="text-l">{err.error.message}</h2> 
        </div>
        </>
    )
}