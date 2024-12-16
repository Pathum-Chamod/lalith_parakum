"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login"); // Redirect back to login
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
      <div>
        <h1 className="text-3xl mb-4">Welcome to the Admin Dashboard!</h1>
        {/* The logout button has been removed */}
      </div>
    </div>
  );
};

export default AdminDashboard;
