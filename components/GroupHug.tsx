"use client";

import GroupHug from "@yomo/group-hug-react";
import "@yomo/group-hug-react/style.css";
import { createPresence } from "@yomo/presence";
import { nanoid } from 'nanoid';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default () => {
  const id = useRef<string>(nanoid());
  const [name, setName] = useState<string>("");
  const presence = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!presence.current) {
      presence.current = createPresence("https://prscd2.allegro.earth/v1", {
        publicKey: process.env.NEXT_PUBLIC_PRESENCE_PUBLIC_KEY,
        id: id.current,
        debug: true,
      });
    }
    return () => {
      presence.current = null;
    };
  }, []);

  useEffect(() => {
    // const userLang = navigator.language || "International";
    setName(
      `Reading ${window.document.title.replace(
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
        channel="pjs-doc"
        id={id.current}
        name={name}
        size={36}
        darkMode={true}
        avatarBorderWidth={2}
      />
    </div>
  );
};
