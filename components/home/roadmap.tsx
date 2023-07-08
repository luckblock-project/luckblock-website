"use client";

import "@/styles/carousel.scss";
import styles from "@/styles/roadmap.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Badge from "../badge";
import { LeftArrowIcon, RightArrowIcon } from "../icons";

export default function Roadmap(): JSX.Element {
  const breakPoints = [
    { width: 476, itemsToShow: 1 },
    { width: 650, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 998, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const carouselRef = React.useRef<Carousel>(null);

  const [prevIsDisabled, setPrevIsDisabled] = useState(true);
  const [nextIsDisabled, setNextIsDisabled] = useState(false);

  function handleCarouselButtonLeftClick() {
    if (carouselRef.current) {
      // @ts-ignore
      carouselRef.current.slidePrev();
    }
  }

  function handleCarouselButtonRightClick() {
    if (carouselRef.current) {
      // @ts-ignore
      carouselRef.current.slideNext();
    }
  }

  return (
    <div className={styles.roadmap}>
      <Link className={styles.roadmap_full_button} href="/roadmap">
        Read full version
      </Link>
      <div className={styles.cards}>
        <div className={styles.carousel}>
          <div className={styles.carousel_buttons}>
            <button
              className={styles.carousel_button_left}
              onClick={handleCarouselButtonLeftClick}
              disabled={prevIsDisabled}
            >
              <LeftArrowIcon />
            </button>
            <button
              className={styles.carousel_button_right}
              onClick={handleCarouselButtonRightClick}
              disabled={nextIsDisabled}
            >
              <RightArrowIcon />
            </button>
          </div>
          {/* @ts-ignore */}
          <Carousel
            breakPoints={breakPoints}
            focusOnSelect={true}
            renderArrow={({ type, onClick, isEdge }) => {
              if (type === 'PREV') {
                isEdge ? setPrevIsDisabled(true) : setPrevIsDisabled(false);
              }
              if (type === 'NEXT') {
                isEdge ? setNextIsDisabled(true) : setNextIsDisabled(false);
              }
              return <></>
            }}
            ref={carouselRef}
          >
            <div className={styles.card} key="1">
              <div className={styles.title}>
                <p>
                  <span></span>RDMP 01
                </p>
                <strong>Environment Development</strong>
              </div>
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card} key="2">
              <div className={styles.title}>
                <p>
                  <span></span>RDMP 01
                </p>
                <strong>Environment Development</strong>
              </div>
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card} key="3">
              <div className={styles.title}>
                <p>
                  <span></span>RDMP 01
                </p>
                <strong>Environment Development</strong>
              </div>
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card} key="4">
              <div className={styles.title}>
                <p>
                  <span></span>RDMP 01
                </p>
                <strong>Environment Development</strong>
              </div>
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.content_box}>
                <Badge className={styles.task_badge}>
                  <span>Q1</span>
                  <span></span>
                  <span>2023</span>
                </Badge>
                <div className={styles.content}>
                  <div>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p className={styles.task_done}>
                      Block Rover Al prototype release
                    </p>
                    <p>Block Rover Al prototype release</p>
                    <p>Block Rover Al prototype release</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
