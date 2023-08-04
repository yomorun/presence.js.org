"use client";

import { useEffect, useRef, useState } from "react";
import { ALLEGRO_URL, createPresence } from "@yomo/presence";
import GroupHug from "@yomo/group-hug-react";
import { faker } from "@faker-js/faker";
import "@yomo/group-hug-react/style.css";
import { useRouter } from "next/router";

export default () => {
  const id = useRef<string>(Math.random().toString());
  const avatar = useRef(faker.image.avatarGitHub());
  const [name, setName] = useState<string>("");
  const presence = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!presence.current) {
      const p = createPresence(ALLEGRO_URL, {
        publicKey: process.env.NEXT_PUBLIC_PRESENCE_PUBLIC_KEY,
        id: id.current,
        debug: true,
      });
      presence.current = p;
    }
    return () => {
      presence.current = null;
    };
  }, []);

  useEffect(() => {
    const userLang = navigator.language || "International";
    setName(
      `${userLang} user is watching ${window.document.title.replace(
        " – Presencejs",
        ""
      )}`
    );
  }, [router.pathname]);

  if (!presence.current) return <div></div>;

  return (
    <div>
      <GroupHug
        presence={presence.current}
        id={id.current}
        avatar={avatar.current}
        name={name}
        darkMode={true}
        avatarBorderColor="#000"
        avatarBackgroundColor="#000"
        avatarBorderWidth={2}
      />
    </div>
  );
};
