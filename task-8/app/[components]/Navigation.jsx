// top navigation bar

import React, { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";

const Navigation = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getServerSession(options);
      setSession(session);
    };

    fetchSession();
  }, []);

  return (
    <div>
      <h1>navigation</h1>
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Navigation;
