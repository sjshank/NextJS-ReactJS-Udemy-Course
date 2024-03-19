import UserForm from "@/components/profile/userForm";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ProfilePage() {
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      }
    });
  }, [router]);
  return <UserForm />;
}

export default ProfilePage;
