"use client";

import { useEffect, useRef, useState } from "react";
import { ALLEGRO_URL, createPresence } from "@yomo/presence";
import GroupHug from "@yomo/group-hug-react";
import { faker } from "@faker-js/faker";
import "@yomo/group-hug-react/style.css";
import { useRouter } from "next/router";

export default () => {
  const id = useRef<string>(Math.random().toString());
  const avatar = useRef(faker.image.avatar());
  const [name, setName] = useState<string>("");
  const groupHugPresence = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!groupHugPresence.current) {
      const p = createPresence(ALLEGRO_URL, {
        publicKey: process.env.NEXT_PUBLIC_PRESENCE_PUBLIC_KEY,
        id: id.current,
        debug: true,
      });
      groupHugPresence.current = p;
    }
  }, []);

  useEffect(() => {
    const userLang = navigator.language || "International";
    setName(
      `${userLang} is watching ${window.document.title.replace(
        " – Presencejs",
        ""
      )}`
    );
  }, [router.pathname]);

  useEffect(() => {
    return () => {
      groupHugPresence.current = null;
    };
  }, [groupHugPresence]);

  if (!groupHugPresence.current) return <div></div>;

  return (
    <div>
      <GroupHug
        presence={groupHugPresence.current}
        id={id.current}
        avatar={avatar.current}
        name={name}
        darkMode={true}
        avatarBorderColor="#000"
        avatarBackgroundColor="#000"
      />
    </div>
  );
};
