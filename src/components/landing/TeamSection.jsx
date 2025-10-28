import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMemberData = [
  {
    id: "tu",
    image: "/tu.jpg",
    roleColor: "bg-indigo-500",
  },
  {
    id: "thuong",
    image: "/thuong.jpg",
    roleColor: "bg-indigo-500",
  },
  {
    id: "chau",
    image: "/chou.jpg",
    roleColor: "bg-indigo-500",
  },
  {
    id: "khoa",
    image: "/khoa.jpg",
    roleColor: "bg-indigo-500",
  },
  {
    id: "hoa",
    image: "/sanguyen.jpg",
    roleColor: "bg-indigo-500",
  },
];

const TeamSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.team;

  const teamMembers = t.members.map((memberInfo) => {
    const staticData = teamMemberData.find((m) => m.id === memberInfo.id);
    return { ...memberInfo, ...staticData };
  });

  return (
    <section
      id="team-section"
      className="flex items-center justify-center bg-indigo-900 py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4 text-white">
              {t.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4 md:gap-6 justify-items-center">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-[18rem] mx-auto">
                    <div className="p-4 md:p-6 text-center flex flex-col items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full shadow-md"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs md:text-sm font-semibold ${member.roleColor} mb-3`}
                      >
                        {member.role}
                      </span>
                      <p className="text-gray-600 text-xs md:text-sm h-16">
                        {member.description}
                      </p>
                      <div className="flex justify-center gap-3">
                        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                          <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                          <FaInstagram size={18} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                          <FaLinkedinIn size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
