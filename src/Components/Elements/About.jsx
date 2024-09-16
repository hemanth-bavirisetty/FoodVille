import { Button } from "@/Components/ui/button";
import { Outlet, Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="profile">
        <Outlet></Outlet>
      </div>
      <div className="about text-center m-10 ">
        <h1 className="text-3xl font-bold mb-5">About page</h1>
        <h3 className="text-xl font-semibold mb-5 p-10 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          cum nostrum aliquam porro labore voluptate. Impedit odit dolorum,
          delectus sint a nisi corporis architecto eum minus blanditiis fugiat
          tempora. Dolorem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. At numquam beatae tempore magni dolore, voluptatibus atque totam
          velit dolorum facere labore quod sed nihil, pariatur, iusto ad
          deserunt. Expedita, nulla. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Similique non, minima vitae, natus facilis nisi
          ipsam earum commodi eveniet quo, quibusdam aspernatur quae libero
          fugiat. Aliquam minima eaque in nemo.
        </h3>
        <Link to={"profile"}>
          <Button variant={"link"}>Profile</Button>
        </Link>
      </div>
    </>
  );
}
