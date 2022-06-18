import React, { useState } from "react";
import { Link } from "react-router-dom";
import navcss from "./navcss.module.css";

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";


const Category = () => {
  let cat = [
    {
      id: 1,
      title: "SHOP",
      path: "/",
      sub: {
        a: "All Fruits",
        p1: "/allfruits",
        b: "Fresh Fruits",
        p2: "/freshcuts",
        c: "Fruits Combos",
        p3: "/fruitcombos",
        d: "Gift By Kimaye",
        p4: "/gifts",
        e: "Grape Family By Kimaye",
        p5: "/",
        f: "Resturant And Replacement",
        p6: "/",
        g: "Friuts X Subscription",
        p7: "/",
        h: "Community Buying",
        p8: "/",
      },
    },
    {
      id: 2,
      title: "LEARN",
      path: "/",
      sub: {
        a: "Our Story",
        p1: "/our-story",
        b: "Why Kimaye",
        p2: "/",
        c: "Traceability",
        p3: "/",
        d: "Beyond Fruits",
        p4: "/",
        e: "Grape Family By Kimaye",
        p5: "/",
        p6: "/",
        p7: "/",
        p8: "/",
      },
    },
  ];





  return (
    <div className={navcss.upper_box}>
      {cat.map((el) => (
        <div className="main_menu" key={el.id}>
          <Link  className="menu-btn" to={el.path}>
            {el.title}
          </Link>

          <div className="xyz">
            <div className="b">
              <div className="div">
                <ul>
                  <li>
                    <Link className="p" to={el.sub.p1}>
                      {el.sub.a}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p2}>
                      {el.sub.b}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p3}>
                      {el.sub.c}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p4}>
                      {el.sub.d}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p5}>
                      {el.sub.e}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p6}>
                      {el.sub.f}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p7}>
                      {el.sub.g}
                    </Link>
                  </li>
                  <li>
                    <Link className="p" to={el.sub.p8}>
                      {el.sub.h}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Link className="grow" to="/Grow">
        GROW
      </Link>
    </div>
  );
};

export default Category;
