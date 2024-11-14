"use client";

import React, { useEffect } from "react";
import style from "./Projects.module.css";
import { dancingScript, merriweather } from "@/font";
import Image from "next/image";
import { data } from "@/constant/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Latestwork from "@/components/latest-work/Latestwork";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  useEffect(() => {
    AOS.init({
      // Customize options here
      duration: 2000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Latestwork />

      <div className={style.projects}>
        <h1
          
          data-aos="zoom-in"
          data-aos-delay="200"
          style={{ fontFamily: dancingScript.style.fontFamily }}
        >
          Projects
        </h1>

        <div className={style.embla} ref={emblaRef}>
          <div className={style.embla__container}>
            {data.map((item) => {
              return (
                <div className={style.embla__slide} key={item.id}>
                  <div className={style.imgDiv}>
                    <Image
                      src={item.img}
                      alt={"model1"}
                      width={150}
                      height={150}
                      className={style.cardImg}
                    />
                  </div>

                  <div
                    className={style.cardText}
                    style={{ fontFamily: merriweather.style.fontFamily }}
                  >
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>

                    <Link href={item.link} target="_blank">
                      <button>Link</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
