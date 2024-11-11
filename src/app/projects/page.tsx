"use client";

import React, { useEffect } from "react";
import style from "./Projects.module.css";
import { dancingScript, merriweather } from "@/font";
import Image from "next/image";
import { data } from "@/constant/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className={style.projects}>
      <div className={style.topDiv}>
        <h1 style={{ fontFamily: dancingScript.style.fontFamily }}>
          My Projects
        </h1>
      </div>




      <div className={style.embla} ref={emblaRef}>
          <div className={style.embla__container}>
            {data.map((item) => {
              return (
                <div className={style.embla__slide} key={item.id}>
                  <div className={style.card}>
                    <Image
                      src={item.img}
                      alt="project1"
                      width={150}
                      height={150}
                      className={style.image}
                    ></Image>
                  </div>

                  <div className={style.content}>
                    <h1 style={{ fontFamily: merriweather.style.fontFamily }}>{item.title}</h1>
                    <p style={{ fontFamily: merriweather.style.fontFamily }}>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

    </div>
  );
}

export default Projects;
