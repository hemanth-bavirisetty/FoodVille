import PropTypes from "prop-types";
import {useState} from 'react'
function Section({ title, description }) {
    const [showDescription, setShowDescription] = useState(false)

  return (
    <>
      <div className="border-2 my-2 border-black p-2 rounded-[20px] shadow-md">
        <h1 className=" px-2 text-4xl font-mono font-bold">{title}</h1>
        <button
        className="underline p-2 " 
        onClick={()=>{setShowDescription((prev)=>!prev)}}
        >
            {showDescription ? "Hide " : "Show "}
        </button>
        {showDescription && <p className="font-serif p-2">{description}</p>}
      </div>
    </>
  );
}

function Instamart() {
  return (
    <>
      <div className=" mx-14 my-10">

        <h1 className="text-5xl p-2 font-bold">Instamart</h1>

        <Section
          title={"About Instamart"}
          description={
            "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!"
          }
        />
        <Section
          title={"Details Instamart"}
          description={
            "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!"
          }
        />

        <Section
          title={"Our Team"}
          description={
            "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!"
          }
        />

        <Section
          title={"Careers "}
          description={
            "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint magni cupiditate, praesentium commodi, minima earum debitis doloribus quia beatae esse eveniet ipsam. Quos nobis culpa dolorem corporis fuga et quidem!"
          }
        />
      </div>
    </>
  );
}

export default Instamart;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
