"use client";

import { useEffect, useRef } from "react";
import { ALLEGRO_URL, createPresence } from "@yomo/presence";
import GroupHug from "@yomo/group-hug-react";
import { faker } from "@faker-js/faker";
import "@yomo/group-hug-react/style.css";

export default () => {
  const id = useRef<string>(Math.random().toString());
  const name = useRef(faker.person.fullName());
  const avatar = useRef(faker.image.avatar());

  const presence = useRef(null);
  if (!presence.current) {
    const p = createPresence(ALLEGRO_URL, {
      publicKey: process.env.NEXT_PUBLIC_PRESENCE_PUBLIC_KEY,
      id: id.current,
      debug: true,
    });
    presence.current = p;
  }

  useEffect(() => {
    return () => {
      presence.current = null;
    };
  }, []);

  if (!presence.current) return <div></div>;

  return (
    <div>
      <GroupHug
        presence={presence.current}
        id={id.current}
        avatar={avatar.current}
        name={name.current}
        darkMode={true}
      />
    </div>
  );
};
