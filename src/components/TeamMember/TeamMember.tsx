'use client';

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-[300px]">
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {/* Social Icons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="bg-white p-2 rounded hover:bg-[#FF9F0D] hover:text-white transition-colors">
            <FaPinterest size={20} />
          </a>
        </div>
      </div>
      {/* Text Content */}
      <div className="text-center py-6 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;