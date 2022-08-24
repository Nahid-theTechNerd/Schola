import React from "react";
import Title from "../../Components/Title";
import { useForm } from "react-hook-form";
import image from "../../Assets/Images/signup.png";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://classroommern.herokuapp.com/user/register", options)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={`mx-10 mt-5 ${classes.single_page}`}>
      <Title></Title>
      <section className="signup flex justify-around items-center">
        <div className="image-container w-[40%]">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-2"
            noValidate
          >
            <h1 className="text-xl font-semibold py-2">SignUp</h1>
            {/* full name input */}
            <input
              className={classes.txt__input}
              placeholder="Full Name"
              type="text"
              {...register("name", { required: "You must fill this field!" })}
            />
            <p className={classes.error_msg}>{errors.name?.message}</p>
            {/* email address input */}
            <input
              className={classes.txt__input}
              placeholder="Email Address"
              type="email"
              autoComplete="on"
              {...register("email", {
                required: "You must fill this field!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address!",
                },
              })}
            />
            <p className={classes.error_msg}>{errors.email?.message}</p>
            {/* password  input */}
            <input
              className={classes.txt__input}
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              {...register("password", {
                required: "You must fill this field!",
                minLength: {
                  value: "8",
                  message: "Password must be at least 8 characters long!",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
                  message:
                    "Password must have an uppercase, a lowercase, a number and a special character!",
                },
              })}
            />
            <p className={classes.error_msg}>{errors.password?.message}</p>
            {/* Sign Up as a  */}
            <select
              className={classes.selection}
              {...register("role", {
                required: "You must fill this field!",
                minLength: { value: 3, message: "You must fill this field!" },
              })}
              defaultValue="0"
            >
              <option disabled value="0">
                SignUp as a
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <p className={classes.error_msg}>{errors.role?.message}</p>
            {/* Submit form  */}
            <input
              type="submit"
              className={`btn-gradient ${classes.button}`}
              value="SignUp"
            />
          </form>
          <p className="text-sm pt-2 text-center">
            {" "}
            Already have account? <Link to="/login">Login here.</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
