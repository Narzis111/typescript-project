"use client";
import Image from "next/image";
import { BsBrightnessHigh, BsTwitterX } from "react-icons/bs";
import { IoCall, IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../public/logo.svg";
import chatbot from "../../public/icons/live1.png";
import livechaticon from "../../public/icons/live-chat 5.png";
import usa from "../../public/icons/usa.png";
import bitcoin from "../../public/logos/bitcoin.png";
import payoneer from "../../public/logos/payoneer.png";
import master from "../../public/logos/master.png";
import paypl from "../../public/logos/paypal.png";
import sbi from "../../public/logos/sbi.png";
import Link from "next/link";
import { IoClose, IoSearch } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

import { FaFileUpload } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";


const Chats = [
  {
    role: "sender",
    message: "Are you being serious about the consent form?",
    time:"8:03PM",
  },
  {
    role: "you",
    message: "Is that an issue?",
    time:"8:03PM",
  },
  {
    role: "sender",
    message: "Are you being serious?Because this is weird then",
    time:"8:05PM",
  },
  {
    role: "you",
    message: "We are never going to have sex. We can be friends though.",
    time:"8:03PM",
  },
];

const UserImg =
  "https://s3-alpha-sig.figma.com/img/880c/b967/a11c7be2f51928dfc76dc15828fbf03f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUjm3IMAGAAGPPh4gBNiRn0U48bqHeSiYPnBCwtQftJ4U9g0g1kV1z3YsthXtK8TeFSi4ZrDqCpkBb-mqFWnHSMPH3idI57Z3fiKFP5Q-ZoeGqzOIaUK0egd-6AmrmsfpbwqN7j6Qk3RTR6EXjzHVfPWcmzJpKZ1WvB2JjEJe3EdEOFbQxa~eucVyn7dmzBk3nFFh70E3OgZcX9Yoy46fSRoT2MSzj3-WqyvNTjRCkdn~N~~8iCviu2qjPCUDyoSIDn74680qY3QKtZ7TwJyaH94uBC2esI1C4edUoYcQ4S-8evaZpZOFLYkkTq6IGaTPjO~hnin5KQtVuPEscLMKw__";
const CallImg =
  "https://s3-alpha-sig.figma.com/img/624f/871d/45260d905371dea61ba160316d35b90f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5EJ9ZWAtvuTd-pRdvcFi44AtiXjfOUGHvLK8jqEB7ZyiYPd9pUbF-zvSwmfQmf5Et-bWqTYFpZ-kZRN4oHlW0~HFtPAp3o32x8tSF3tq2Q4MUBM7l0jPRRigtxwDhw78doglUopNFf2j6pmdmhHfHrV6ni~eriPjNGTKvfxS9peUyDE1eWzBGr5cRIKB-BNMjlJHDTeuQxRrQxG22730FWvx8G2vf~E46VTCj2Ea-b5uHM9~QOPCBdBKPkImAVn47oPF8DNLYMZlvL6S6S9jjPOSSMU427SNl8oXjmAcIK9CH-LL42c7Pb7p8VNJSE3d4FK2gc4wokSyx9hrvIkoQ__";

const SettingImg =
  "https://s3-alpha-sig.figma.com/img/9801/9810/595295091f5ec9a38dac6a413fa25d44?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eZlxH0CmJ8Xgxcz84Dvh4HofwmdIEqYU2QeticWwMi7EKl0jxjBdRGcWdU543Y1fWGtzC8SHnduUu6sCeaD0KE9-tdf1mtgc54FWiVhVZ1Wx5vabnRb8x9Mqa5CFR0Xtz9r2Symn37YNd3BBbkweiHKpVXXpRi7oQkx9IAascgglsUeN~JwXSy17BAVmGnnpqyGB2tKHZZ-KaiD~zIKN3qP~8EV3xRSNvlEuQhz15~Scz1t9nsMEr7m3Pu7SeJTNmDpGvfqtm4kfAtQsGNIX4UUpmjsyYv~syphD7RMlMxFQj1cH4lwKAUIHarz3UDagpLfOOi0N7dmc7RcpDbA6jw__";

const uplodeImg =
  "https://s3-alpha-sig.figma.com/img/1f47/ffa3/2c8ba17913110f01c196cd58628d7dbf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OzFznPgk4VmJsJWUyy4XOJ7iGRsYS5r~iQBaDnZfO3kBUzqgsbTn3maWrHgQMLDk72OP8UpCDoaYOjVXZLcctx0JZEZ1tNJyOge~ZDpTbRhhW9yFlfHlJsMIuThqogXG6wJbKP9y~2RWNp4BKncOVy~Ea1TwaPicJCIRK~6ToegE4TPMsTCV6JfhJVHPYH~eO0JUwvnBjNMrxufJQjKR-T~qZKHYm~hw3zUJw2SPU74dzYaIoR9emlMfdzFg8aywBize2J4GyVUXQGIa8w7WIoTnYmseCNhsuhKs-20K94LzV3N3XqQKQzUjoVaGjPVYxVuflcdf3kg8znqN6uRbAA__";

const micImg =
  "https://s3-alpha-sig.figma.com/img/af8f/ca79/c89fe2faf4acf520e359d8e7b284a5af?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDoG5F-iHGgXDtwo~a1nWCQ-oLaTMv5NgwTacEhXNiTNphTw60wwq5m4WwWwU0KZaKO5tkpUOWwDF2UIpu-oI6TkJZyVb10ZmhWVyh6c9BVkDl-8Sy84twqC4dGvmNZrImYeKWjoraZpCFhTEXfAokfo-JYWVJA1-hvkL~MNF9Do6JEn985UMemxBdheugqBAtrgZb55t3BSAipzUkLVaS-Dg6qJkXYNTNxUxQJs941mXqoQ65teAxnZG4SfAUVV0aLFe-lrbu5JWQgQBnxD7WIAWgLWZmtyoxTd0XBkkDhj7sdlfyHVbe7mdv3BWFX9~HXz8yMg7CfUJ0ISFI0THA__";

const sendImg =
  "https://s3-alpha-sig.figma.com/img/d8a6/8b6d/1b543b866ac384f9b25e25687422c02a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWwLFQHN2qYgzbT9~-urJvP8l473nULswLGWWMFPkEeObr5DZQNwsvbwOjwpMdgXpvW~1X-UgTlRvY3yr4~rZy6VaQEtnT0CRQ7-pu6dSOLVEHb7W3u9cN3AJaGYDqg3qjqYV-CS00EYbCsNOpIw9s7~gTPYa0HQrWcF4Nl7dYUxuWyIM8tqTtb~JkqhJIZMHaKFa0urJRRZKNosWFxM8s652sPfH6SgTfrHLehQG3me-vdB4hSOOlk-90R9Z44Ckf8j~B7Z9CI-e~hNgXsZFTsEQd5Ky8YpnBrSQoTZDgomtsNHGmNnFzrSNV8DKP8lbe0kPlv6aRrLnuNKYXeQ5Q__";

const endCallImg =
  "https://s3-alpha-sig.figma.com/img/a372/37eb/0e32f3dcf2380391826895c640315452?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pXakADlN9DsD61m8DTjA~AgA312cz~Otc5mx6iSxlGredeppwHUmtg20uqg~PfhJlPxJ1kZ0HEYj4KCQB-QqzeldZKyGyETzcodysXVKzof-cKB7LBy~KzbmsszCHzczyL9MBbWmcR9r-o9JqdSH7GPkxprHzn8NE52dtDHIbAtMy8Ly5GLCDm9Qg0KW4x5UiVAb9kbJU4b~9ql47jLJeqmzhsRvyUsU6XyuQCdeoYD7E68v45HTDlaVYFoayRp7h4y5bvjK-9bN837qZDHlAKF26LdPXMFFwWQJ549eM7ailXJkObIsd8VFJFK5W3J4MoL4sHvjizZ2vFwQqWwgpw__";

const speakerImg =
  "https://s3-alpha-sig.figma.com/img/069d/0da1/dcf117916f2b0317956b5fbcca67acc6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXa5IfbZq08WIM50peXvJeywddt1Ey1m00ddybcVFxIw7FtwW4GRDCvZ2yocqTK6Ao8ExKamQrx9AqLPCEBAbesDU1RerCfbqqiwtD7GXh53EAko9NgYb2HE-JxEweQ9ZBGbYW72Zsy6aOvHQ4PeyLlkZ3YIa8-UUbpyLCdmxTWwBJUMx5MCnZ6foR8PNGwYffid52fNHNQ9XFXfdB8rGhOvvo9EK8fTqTmezouTKjf~YhkiGG7QSSDR~WsLIDi71LRomOEwtvinU12vogCPcOES39075MCi1pS8doHpUS54NCgpak~AsM725uswUxy-YJT5VIVy~P6q7OiVz0CQLA__";
const recordImg =
  "https://s3-alpha-sig.figma.com/img/78a4/db6a/cf6505fcd094931f96bc9d0bd272c4af?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMpx8SvvzWbbXLDRZ03CuMfx0Z9WwqyJ5DHqaQPUr5G-jxXrYLa4VO-~4NIhioQxyQMO-oN5ICVscHdESy0MwQWlZQb0dudhQFaO8kV5ThAGgdvu1-Ez-zVIWF8qSHg7JkBd1iMyGXZR-JAfnbm2gyGVrjtahr7szBOKhqt~Zr1QgVEHnRovRmMyMgzaboXvwoIBi3PH47ub6h5ujH-F-wH6odnj4OswJsidgAFKH9G13YpsoCMVm-~2ubLI33ujnG-x5f~u-qs3JFGu3p-j-ORLXY5YbYVxoI21Elhdrz2kQpNIC6VOJqn6b9pmybR50ZWSwamCxZTDHjHptERwyg__";


export default function Footer() {

  // const messages = [
  //   { name: "Mr Jack", avatar: "/images/profile/Abstract04.png", text: "Hi", time: "2 Hours ago" },
  //   { name: "Ms Paris", avatar: "/images/profile/IconSet (1).png", text: "Hello", time: "14 Hours ago" },
  //   { name: "Mr Jams", avatar: "/images/profile/IconSet (2).png", text: "Can you help me?", time: "3 hours ago" },
  //   { name: "Misa", avatar: "/images/profile/IconSet (3).png", text: "Hi", time: "1 Hour ago" },
  //   { name: "Misa", avatar: "/images/profile/IconSet.png", text: "Hi!", time: "1 Hour ago" },
  // ];
  const [isSmallModalOpen, setSmallModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  // Function to open the chat modal
  const openChatModal = () => {
    setIsChatModalOpen(true);
  };

  // Function to close the chat modal
  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  // Function to handle opening and closing of modals
  const openSmallModal = () => setSmallModalOpen(true);
  const closeSmallModal = () => setSmallModalOpen(false);

  // const openChatModal = () => {
  //   setSmallModalOpen(false);  // Close small modal
  //   // setChatModalOpen(true);    // Open chat modal
  // };

  // const closeChatModal = () => setChatModalOpen(false);
  const usefulLinks = [
    "cookies",
    "contact us",
    "help &support",
    "about us",
    "terms and condition",
    "privacy policy",
    "return policy",
    "global locations",
    "global businesses",
  ];
  const informationTech = [
    "fire safety",
    "electrical safety",
    "detailed engineering assessment(DEA)",
    "Energy efficient audit",
    "architectural",
    "testing and training",
    "environmental and social",
    "impact assessment",
    "green building",
  ];
  const civilEng = [
    "energy efficient audit",
    "architectural",
    "testing and training",
    "environmental and social",
    "impact assessment",
    "green building",
    "cap management",
    "material testing",
  ]


  return (
    <footer className="bg-[#CCCCFF] px-14 pb-2">
      {/* <footer className="bg-[#231B7D] px-14 pb-2"> */}
      <section className="relative -top-10 bg-[#ffb200] px-10 py-10 text-sm">
        <div className="mb-10 flex justify-between">
          <ul>
            <li className="flex items-center justify-center">
              <Image src={logo} alt="Logo" className="flex justify-center" />

            </li>
            <li>
              <p className="text-md mt-3 font-bold text-center tracking-wider text-[#14208F]">
                NASA or the National Aeronautics <br /> and Space Administration
              </p>
            </li>
            <li className="mt-5">
              <ul className="flex flex-col gap-y-2">
                {/* <li>
                  <Image
                    src={usa}
                    alt="text with USA flag text color"
                    width={100}
                  />
                </li> */}
                <li className="flex items-center gap-x-1">
                  <FaLocationDot /> London, Vladivostok named Sergey
                </li>
                <li className="flex items-center gap-x-1">
                  <MdOutlineEmail /> sampleemail@email.com
                </li>
                <li className="flex items-center gap-x-1">
                  <IoCall />
                  +1 949494+99
                </li>
                <li className="flex items-center gap-x-1">
                  <IoCall />
                  +44 496961999
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-base font-bold">Company</li>
            {usefulLinks.map((link, i) => (
              <FooterLink key={i}>{link}</FooterLink>
            ))}
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-base font-bold">Information technology</li>
            {informationTech.map((link, i) => (
              <FooterLink key={i}>{link}</FooterLink>
            ))}
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="mb-2 text-base font-bold">Civil Engineering</li>
            {civilEng.map((link, i) => (
              <FooterLink key={i}>{link}</FooterLink>
            ))}
          </ul>
        </div>

        <div className="flex justify-between gap-x-5">
          <div className="flex items-center gap-x-4">
            {/* <Switch /> */}
            <Subscribe />
          </div>
          <div className="flex flex-col items-end">
            <Image src={chatbot} onClick={openSmallModal} alt="Chat bot icon" width={60} className="mb-4 w-20 h-20 rounded-full" />
            {/* Small Modal with buttons */}
            {isSmallModalOpen && (
              <div className="fixed mt-28 inset-28 z-50 flex items-center justify-center bg-opacity-50">
                <div className="bg-white p-6 relative rounded-lg shadow-lg max-w-2xl w-fit">
                  <button
                    onClick={closeSmallModal}
                    className="text-black hover:text-gray-600 text-xl absolute right-5 top-0"
                  >
                    x
                  </button>
                  <div className="flex gap-4">
                    <Image src={livechaticon} onClick={openSmallModal} alt="Chat bot icon" width={60} className="mb-4 w-20 h-20 rounded-full" />
                    <h2 className="text-lg items-center font-semibold mb-4">Hello, <br /> Welcome to our live chat!</h2>
                  </div>
                  <div className="mt-4 flex justify-between gap-2">
                    <button onClick={openChatModal} className="w-full py-2 px-4 bg-blue-500 text-white rounded">Orders</button>
                    <button onClick={openChatModal} className="w-full py-2 px-4 bg-blue-500 text-white rounded">Payment</button>
                    <button onClick={openChatModal} className="w-full py-2 px-4 bg-blue-500 text-white rounded">Withdraw</button>
                    <button onClick={openChatModal} className="w-full py-2 px-4 bg-blue-500 text-white rounded">Report</button>
                    <button onClick={openChatModal} className="w-full py-2 px-4 bg-blue-500 text-white rounded">Advice</button>
                  </div>
                </div>
              </div>
            )}

            {/* Chat Modal */}
             {/* Chat Modal */}
        {isChatModalOpen && (
          <h1>Work going on</h1>
          // <UpdateConversation />
        
        )}
            {/* Other items like payment logos */}
            <div className="flex items-center gap-x-4">
              <Image src={bitcoin} alt="bitcoin logo" width={60} />
              <Image src={payoneer} alt="Payoneer logo" width={50} />
              <Image src={master} alt="Master card logo" width={40} />
              <Image src={paypl} alt="Paypal logo" width={50} />
              <Image src={sbi} alt="SBI logo" width={50} />
            </div>
          </div>
        </div>
      </section>
      

      <section className="flex items-center justify-between mb-3">
        <ul className="flex gap-x-2 items-center">
          <p className="text-sm text-[#000000B2]">
            FOLLOW US
          </p>
          <SocialLink link="">
            <FaFacebookF />
          </SocialLink>
          <SocialLink link="">
            <FaYoutube />
          </SocialLink>
          <SocialLink link="">
            <IoLogoTiktok />
          </SocialLink>
          <SocialLink link="">
            <BsTwitterX />
          </SocialLink>
        </ul>
        <p className="text-sm text-[#000000B2]">
          © 2024 Sample. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
const ChatModal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  return (
    <>
      {isOpen && (
        <div className="inset-10 z-50 flex items-center justify-center bg-opacity-60">
          <div className="relative w-full max-w-lg p-6 rounded-lg shadow-lg">
            <button onClick={onClose} className="absolute top-5 z-80 -right-5 p-2 text-gray-600 hover:text-gray-900">
              <IoClose size={24} />
            </button>
            {/* Render the chat content */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const SocialLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb200] text-xl"
    >
      {children}
    </Link>
  );
};

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      href=""
      className="font-medium capitalize transition-all duration-150 hover:text-blue-800"
    >
      {children}
    </Link>
  );
};

// const Switch = () => {
//   return (
//     <div className="relative h-10 w-20 rounded-full bg-orange-800 p-2">
//       <div className="absolute right-1 top-1 h-8 w-8 rounded-full bg-white" />
//       <BsBrightnessHigh className="absolute left-2 top-2 text-2xl text-white" />
//     </div>
//   );
// };

const Subscribe = () => {
  const languages = [
    "Afrikaans",
    "Azərbaycan",
    "Bahasa Indonesia",
    "Bahasa Malaysia",
    "Bosanski",
    "Català",
    "Čeština",
    "Dansk",
    "Deutsch",
    "Eesti",
    "English (India)",
    "English (UK)",
    "English (US)",
    "Español (España)",
    "Español (Latinoamérica)",
    "Español (US)",
    "Euskara",
    "Filipino",
    "Français",
    "Français (Canada)",
    "Galego",
    "Hrvatski",
    "IsiZulu",
    "Íslenska",
    "Italiano",
    "Kiswahili",
    "Latviešu valoda",
    "Lietuvių",
    "Magyar",
    "Nederlands",
    "Norsk",
    "O‘zbek",
    "Polski",
    "Português",
    "Português (Brasil)",
    "Română",
    "Shqip",
    "Slovenčina",
    "Slovenščina",
    "Srpski",
    "Suomi",
    "Svenska",
    "Tiếng Việt",
    "Türkçe",
    "Беларуская",
    "Български",
    "Кыргызча",
    "Қазақ Тілі",
    "Македонски",
    "Монгол",
    "Русский",
    "Српски",
    "Українська",
    "Ελληνικά",
    "Հայերեն",
    "עברית",
    "اردو",
    "فارسی",
    "नेपाली",
    "मराठी",
    "हिन्दी",
    "অসমীয়া",
    "বাংলা",
    "ਪੰਜਾਬੀ",
    "ગુજરાતી",
    "ଓଡ଼ିଆ",
    "தமிழ்",
    "తెలుగు",
    "ಕನ್ನಡ",
    "മലയാളം",
    "සිංහල",
    "ภาษาไทย",
    "ລາວ",
    "ဗမာ",
    "ქართული",
    "አማርኛ",
    "ខ្មែរ",
    "中文 (简体)",
    "中文 (繁體)",
    "中文 (香港)",
    "日本語",
    "한국어"
  ];

  return (
    <form>
      <select className="mr-4 rounded-lg border border-black px-3 py-2">
        {languages.map((l, i) => <option value="english" key={i}>{l}</option>)}
      </select>

      <input
        type="text"
        className="rounded-l-full px-6 py-3 text-sm font-semibold"
        placeholder="tact@gmail.com"
      />

      <button className="rounded-r-full bg-[#231B7D] px-6 py-3 text-sm font-semibold text-white">
        Subscribe
      </button>
    </form>
  );
};

// ==========================
interface UpdateConversation {
  show: boolean;
  onClose: () => void;
}
const UpdateConversation = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isShowChats, setIsShowChats] = useState(false);
  const [isCallPopUp, setICallPopUp] = useState(false);
  const [isSettingOn, setIsSettingOn] = useState(false);
  const [minimise, setMinimise] = useState(false);
  return (
    <>
{isOpen && (
          <div className="fixed mt-20 max-w-52 mx-auto inset-28 z-999 flex items-center justify-center bg-black bg-opacity-90 rounded-xl">
            <div className="">
              {/* close */}
              <div className="flex right-2 top-2 items-center gap-2 text-xl font-bold">
               
                <span className="rounded-full bg-slate-200 p-1">
                  <VscChromeMinimize className="cursor-pointer text-meta-5" />
                </span>
                <span className="rounded-full bg-slate-200 p-1">
            <button onClick={onClose} className="absolute top-5 z-80 -right-5 p-2 text-gray-600 hover:text-gray-900">
              <IoClose size={24} />
            </button>
                </span>
              </div>
              {/* top */}
              <div className="flex items-center bg-[#FFB200F2] p-1">
                <div className="flex items-center gap-1 font-semibold">
                 <div className="">
                 <Image src="/images/user.png" height={40} width={40} className="rounded-full" alt="user" />
                 
                  </div> 
                  <span className="mr-4">Richard Poon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    onClick={() => setICallPopUp(true)}
                    src="/images/call.png" height={20} width={20} alt="call" />
                </div>
              </div>
              {/* chat */}
              <div className="max-h-[300px] min-h-[250px] space-y-2 overflow-y-scroll px-3 py-5 text-white">
                {Chats.map((chat, index) =>
                  chat.role === "you" ? (
                    <ChatLineYou key={index} chat={chat} />
                  ) : (
                    <ChatLineSender chat={chat} key={index} />
                  ),
                )}
                {/* {Chats.map((chat, index) =>
                  chat.role === "you" ? (
                    <ChatLineYou key={index} chat={chat} />
                  ) : (
                    <ChatLineSender chat={chat} key={index} />
                  ),
                )}
                {Chats.map((chat, index) =>
                  chat.role === "you" ? (
                    <ChatLineYou key={index} chat={chat} />
                  ) : (
                    <ChatLineSender chat={chat} key={index} />
                  ),
                )} */}
              </div>
              {/* Bottom */}
              <div className="flex items-center gap-1 rounded-full px-3 py-2">
               <button><FaFileUpload className="cursor-pointer text-meta-5 text-xl" /></button>
               {/* <Image
                  src={uplodeImg}
                  height={30}
                  width={30}
                  alt="setting"
                  className="cursor-pointer"
                />
                <Image
                  src={micImg}
                  height={30}
                  width={30}
                  alt="setting"
                  className="cursor-pointer"
                /> */}
                <input
                  type="text"
                  placeholder="Enter a message"
                  className="w-2/3 rounded-full bg-slate-500 px-2 py-1 text-white outline-none"
                />
                  <button><IoIosSend className="cursor-pointer text-xl" /></button>
                {/* <Image
                  src={sendImg}
                  height={30}
                  width={30}
                  alt="setting"
                  className="cursor-pointer"
                /> */}
              </div>

              {isSettingOn && <ChatSettings />}
            </div>
          </div>

                )}       
        {minimise && (
          <div
            onClick={() => [setICallPopUp(true), setMinimise(false)]}
            className="fixed bottom-5 right-2 z-40 cursor-pointer"
          >
            <Image src={UserImg} height={70} width={70} alt="user" />
          </div>
        )}
      
      {isCallPopUp && (
        <CallPopUp
          isCallPopUp={isCallPopUp}
          setICallPopUp={setICallPopUp}
          setMinimise={setMinimise}
        />
      )}
   
    </>
  );
};

const ChatLineYou = ({ chat }: { chat: { role: string; message: string; time: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" flex items-center justify-end gap-1 mt-3">
      <div>
      <button className="bg-[#2A56EBE5] rounded-tl-[101px] rounded-tr-[95px] rounded-br-[5px] rounded-bl-[101px] py-1 px-3">{chat.message}</button>
     <p className="text-xs text-gray-400 flex justify-end">{chat.time}</p>
    </div></div>
  );

};

const ChatLineSender = ({
  chat,
}: {
  chat: { role: string; message: string; time: string; };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-start gap-1">
      {/* <Image src="/images/user.png" height={30} width={30} alt="user" className="rounded-full" /> */}
<div>
<button className="bg-[#FFB200E5] rounded-tl-[95px] rounded-tr-[101px] rounded-br-[101px] rounded-bl-[5px] py-1 px-3 text-left">{chat.message}</button>
<p className="text-xs text-gray-400">{chat.time}</p>
</div>
    </div>
  );
};

const CallPopUp = ({
  isCallPopUp,
  setICallPopUp,
  setMinimise,
}: {
  isCallPopUp: boolean;
  setICallPopUp: any;
  setMinimise: any;
}) => {
  return (
    <div className="absolute -left-125 top-5  rounded-xl bg-[#ECEEF1] p-5 z-30">
      <div className="relative flex min-h-[250px] min-w-[200px] flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/images/user.png" height={60} width={60} alt="user" />
          <h2 className="text-xl font-semibold">Richard Poon</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image src={micImg} height={40} width={40} alt="user" />
          <Image src={recordImg} height={40} width={40} alt="user" />
          <Image
            onClick={() => setICallPopUp(false)}
            src={endCallImg}
            height={40}
            width={40}
            alt="user"
          />
          <Image src={speakerImg} height={40} width={40} alt="user" />
        </div>
        <span
          onClick={() => [setICallPopUp(false), setMinimise(true)]}
          className="absolute right-0 top-0 rounded-full bg-white p-2"
        >
          <VscChromeMinimize className="cursor-pointer text-meta-5" />
        </span>
      </div>
    </div>
  );
};

const ChatSettings = () => {
  const [isDeletePopUp, setIsDeletePopUp] = useState(false);
  return (
    <div className="absolute right-0 top-10 z-9999 rounded-xl bg-white px-5 py-2 text-slate-400 dark:bg-black">
       <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">Can not message</span>
    </label>
      <div className="flex items-center justify-between">
      <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">Can not Call</span>
    </label>
      </div>
      <div className="flex items-center justify-between">
      <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">Block</span>
    </label>
      </div>
      
      <div className="relative flex items-center justify-between">
        <span>Disappearing messages</span>
        <MdDelete
          onClick={() => setIsDeletePopUp(!isDeletePopUp)}
          className="text-meta-1"
          size={20}
        />
 {isDeletePopUp && (
  <div className="absolute right-0 top-10 z-99999 w-[200px] rounded-xl bg-slate-800 px-5 py-2 text-slate-400">
     <div className="flex items-center justify-between gap-4">
    <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">24 Hours</span>
    </label>
    </div>
    <div className="flex items-center justify-between gap-4">
    <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">7 Days</span>
    </label>
    </div>
    <div className="flex items-center justify-between gap-4">
    <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">15 Days</span>
    </label>
    </div>
    <div className="flex items-center justify-between gap-4">
    <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">60 Days</span>
    </label>
    </div>
  
    <div className="flex items-center justify-between gap-4">
    <label className="relative inline-flex cursor-pointer items-center">
    <input type="radio" name="timePeriod" value="60" className="sr-only peer" />
    <div className="h-3 w-3 rounded-full border-2 border-slate-300 peer-checked:bg-blue-600"></div>
    <span className="ml-3">Off</span>
    </label>
    </div>
   
  </div>
)}

      </div>
  
    </div>
  );
};




