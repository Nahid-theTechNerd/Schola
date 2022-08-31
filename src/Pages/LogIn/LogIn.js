import React from "react";
import Title from "../../Components/Title";
import { useForm } from "react-hook-form";
import image from "../../Assets/Images/login.png";
import classes from "../SignUp/SignUp.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("user/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        document.cookie = `token=${response.data.token}`;
        navigate("/dashboard");
        console.log(response.data);
      })
      .catch((errors) => console.error(errors));
  };

  return (
    <div className={`mx-10 mt-5 ${classes.single_page}`}>
      <Title></Title>
      <section className="login flex justify-around items-center">
        <div className="image-container w-[40%]">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-2"
            noValidate
          >
            <h1 className="text-xl font-semibold py-2">Login</h1>
            {/* email address input */}
            <input
              className={classes.txt__input}
              placeholder="Email Address"
              type="email"
              autoComplete="on"
              {...register("email")}
            />
            <p></p>
            {/* password  input */}
            <input
              className={classes.txt__input}
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
            />
            <p></p>
            {/* Submit form  */}
            <input
              type="submit"
              className={`btn-gradient ${classes.button}`}
              value="Login"
            />
          </form>
          <p className="text-sm pt-2 text-center">
            {" "}
            Have no account? <Link to="/signup">SignUp here.</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
