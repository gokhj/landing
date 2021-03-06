import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Burger from "./Burger";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul className="navigationList">
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className={
                  router.pathname.startsWith("/blog") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 20;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              background-color: #fde68a;
              color: #374151;
            }
            @media (min-width: 769px) {
              .container {
                width: 7rem;
                height: 1rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                height: 1rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
            @media (min-width: 768px) and (max-width: 969px) {
              li {
                display: inline;
                margin-left: 1rem;
              }
              ul {
                margin-left: 1.5rem;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
