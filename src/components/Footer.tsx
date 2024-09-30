import { ReactNode } from 'react';
import { FaHome, FaFileAlt, FaGithub, FaLinkedin, FaTwitter, FaSun } from 'react-icons/fa';

const IconBar = () => {
  return (
    <div className="flex fixed bottom-0 left-0 right-0 z-10 justify-center items-center py-4 bg-white">
      <div className="flex bg-gray-100 rounded-full py-4 px-5 shadow-lg">
     
        <IconWrapper>
          <FaHome />
        </IconWrapper>

     
        <IconWrapper>
          <FaFileAlt />
        </IconWrapper>

       
        <IconWrapper>
          <FaGithub />
        </IconWrapper>

       
        <IconWrapper>
          <FaLinkedin />
        </IconWrapper>

       
        <IconWrapper>
          <FaTwitter />
        </IconWrapper>



       
        <IconWrapper>
          <FaSun />
        </IconWrapper>
      </div>
    </div>
  );
};


const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-2 text-gray-700 hover:text-gray-900 transition duration-200">
      {children}
    </div>
  );
};

export default IconBar;
