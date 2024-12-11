"use client";
import React, { useState } from "react";
import { header_data } from "@/helper/data";
import { Button } from "@/components/ui/button";

const lang = [
  { id: 1, lang: "🇬🇧 En", langText: "en" },
  { id: 2, lang: "🇮🇹 It", langText: "it" },
];

const Navbar = () => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang[0]); 

  const handleLanguageSelect = (language) => {
    setSelectedLang(language);
    setOpenLanguage(false); 
  };

  console.log(selectedLang)
  return (
    <div className="bg-black w-[100vw] ">
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
                <Button variant="gradient_bg">Register/Login</Button>
              </li>

              {openLanguage && (
                <div className="flex flex-col items-center justify-center w-24 z-50 absolute top-10 right-[115px] bg-black rounded-lg shadow-md">
                  <ul>
                    {lang.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleLanguageSelect(item)} 
                        className="flex items-center gap-2 hover:bg-gray-500 px-2  my-1  rounded-sm cursor-pointer"
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
