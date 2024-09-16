import "../Styles/ShimmerUI.css";
export default function ShimmerUi() {
  return (
    <>
      <div className="card justify-center flex flex-wrap">
        <div className="img rounded-3xl h-60 w-64 bg-slate-100"></div>
        <div className="details h-40 w-64 rounded-2xl p-1">
          <span>
            <div className="title text-3xl font-extrabold my-2 bg-slate-100"></div>
            <h3 className="title text-xl font-bold"> </h3>
            <h4 className="cuisines text-l"></h4>
          </span>
          <h4 className="text-l  font-bold"></h4>
        </div>
      </div>
    </>
  );
}
