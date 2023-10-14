import React, { useState } from "react";
import heroDesktop from "../assets/heroDesktop.jpg";
import bg from "../assets/bg.svg";
import iconArrow from "../assets/iconArrow.svg";
import logo from "../assets/logo.svg";
import "./Base.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import error from "../assets/icon-error.svg";

const schema = z.object({
  emailAddress: z.string().email({ message: "Please provide a vaild email" }),
});

type Validation = z.infer<typeof schema>;

const Base = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Validation>({ resolver: zodResolver(schema) });

  const errorBorder = errors.emailAddress ? " error--border" : "";

  const isActive = errors.emailAddress ? true : false;
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./images/favicon-32x32.png"
          />

          <title>Frontend Mentor | Base Apparel coming soon page</title>
        </head>
        <body>
          <div className="bg__container">
            <img
              style={{ width: "55.9rem", height: "36rem" }}
              className="bg"
              src={bg}
              alt=""
            />
          </div>
          <div className="container">
            <div className="item__container">
              <div className="base__aparel">
                <img src={logo} alt="" />
              </div>
              <div className="highlighted__text__input">
                <div className="pink__text highlighted-base">We're</div>
                <span className="black__text highlighted-base">
                  coming soon
                </span>
                <div className="texts padb-2">
                  Hello fellow shoppers! We're currently building our new
                  fashion store. Add your email below to stay up-to-date with
                  announcements and our launch deals
                </div>
                <form
                  className={["form" + errorBorder].join(" ")}
                  onSubmit={handleSubmit(() => console.log("ehllo"))}
                >
                  <input
                    {...register("emailAddress")}
                    id="emailAddress"
                    className="input"
                    placeholder="Email Address"
                    type="text"
                  />
                  <div>
                    {isActive && (
                      <span
                        style={{ marginRight: "1rem" }}
                        className="error__icon"
                      >
                        <img src={error} alt="" />
                      </span>
                    )}
                    <span className="submit__icon">
                      <button className="submit">
                        <img src={iconArrow} alt="" />
                      </button>
                    </span>
                  </div>
                </form>
                {errors.emailAddress && (
                  <p className="texts error--text mleft">
                    {errors.emailAddress.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <img className="gg" src={heroDesktop} alt="" />
        </body>
      </html>
    </>
  );
};

export default Base;
