"use client";
import { Button } from "@/components/ui/button";
import { header_data } from "@/helper/data";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation"; // Import useRouter
import { useEffect, useState } from "react";

const lang = [
  { id: 1, lang: "🇬🇧 En", langText: "en" },
  { id: 2, lang: "🇮🇹 It", langText: "it" },
];

const Navbar = () => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang[0]);
  const [user, setUser] = useState(null); // To store the current user
  const router = useRouter(); // Initialize router

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLang(language);
    setOpenLanguage(false);
  };

  // Handle Login button click
  const handleLoginClick = () => {
    router.push("/admin/login"); // Navigate to Admin Login page
  };

  // Handle Logout button click
  const handleLogoutClick = async () => {
    try {
      await signOut(auth); // Sign out the user
      router.push("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-black w-[100vw]">
      <div className="h-[10vh] max-w-[1280px] flex items-center mx-auto">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-3xl text-white">logo</h1>
          <div>
            <ul className="flex items-center gap-6">
              {header_data.map((item) => (
                <li
                  key={item.id}
                  className="text-white cursor-pointer hover:text-gray-500 font-semibold transition-all duration-200"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-4 relative">
              <li
                className="text-white text-sm flex items-center cursor-pointer"
                onClick={() => setOpenLanguage(!openLanguage)}
              >
                {selectedLang.lang}
              </li>
              <li>
                {user ? (
                  <Button variant="gradient_bg" onClick={handleLogoutClick}>
                    Logout
                  </Button>
                ) : (
                  <Button variant="gradient_bg" onClick={handleLoginClick}>
                    Login
                  </Button>
                )}
              </li>

              {openLanguage && (
                <div className="flex flex-col items-center justify-center w-24 z-50 absolute top-10 right-[115px] bg-black rounded-lg shadow-md">
                  <ul>
                    {lang.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleLanguageSelect(item)}
                        className="flex items-center gap-2 hover:bg-gray-500 px-2 my-1 rounded-sm cursor-pointer"
                      >
                        {item.lang}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
