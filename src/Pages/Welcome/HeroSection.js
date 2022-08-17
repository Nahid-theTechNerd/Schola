import cover from "../../Assets/Images/cover.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="my-8 mx-20 flex justify-between items-center gap-4">
      <div className="w-1/2">
        <h1 className="slogan text-[44px] font-bold">
          <span className="title">Schola</span>
          <br /> Learn from Anywhere.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          deserunt animi dolores dignissimos reiciendis pariatur.
        </p>
        <Link to="/signup">
          <button className="btn-gradient my-2">Get Started</button>
        </Link>
      </div>
      <div className="cover-photo w-1/2 flex justify-center items-center">
        <img src={cover} alt="" />
      </div>
    </section>
  );
}
