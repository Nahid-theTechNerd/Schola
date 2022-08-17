import React from "react";
import Title from "../../Components/Title";
import { useForm } from "react-hook-form";
import image from "../../Assets/Images/login.png";
import classes from "../SignUp/SignUp.module.css";

export default function LogIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mx-10 mt-5">
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
              {...register("email")}
            />
            <p></p>
            {/* password  input */}
            <input
              className={classes.txt__input}
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <p></p>
            {/* Submit form  */}
            <input type="submit" className={`btn-gradient ${classes.button}`} />
          </form>
          <p className="text-sm pt-2 text-center">
            {" "}
            Have no account?{" "}
            <a href="\" className="text-blue-700">
              SignUp here.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}