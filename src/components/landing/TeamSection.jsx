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
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-48 md:w-56">
                    <div className="p-3 md:p-4 text-center flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 mb-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full shadow-md"
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1">
                        {member.name}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-white text-xs font-semibold ${member.roleColor} mb-2`}
                      >
                        {member.role}
                      </span>
                      <p className="text-gray-600 text-xs h-12 mb-2">
                        {member.description}
                      </p>
                      <div className="flex justify-center gap-2">
                        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                          <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                          <FaInstagram size={14} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                          <FaLinkedinIn size={14} />
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
