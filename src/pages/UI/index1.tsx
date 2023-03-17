import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBookmark, FaHeart } from 'react-icons/fa';

type Props = {
  bookmarks: number;
  description: string;
  imageSrc: string;
  likes: number;
  title: string;
};

const Card = ({ bookmarks, description, imageSrc, likes, title }: Props) => {
  return (
    <motion.div
      whileHover={{ boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.3)', scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className='overflow-hidden rounded-lg bg-orange-500 text-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg'
    >
      <div className='relative h-56'>
        <Image src={imageSrc} layout='fill' objectFit='cover' alt='' />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium'>{title}</h3>
        <p className='mt-2'>{description}</p>
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex'>
            <div className='mr-4 flex items-center'>
              <FaHeart className='mr-2 text-yellow-400' />
              <span>{likes}</span>
            </div>
            <div className='flex items-center'>
              <FaBookmark className='mr-2 text-pink-400' />
              <span>{bookmarks}</span>
            </div>
          </div>
          <button className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'>Read More</button>
        </div>
      </div>
    </motion.div>
  );
};

const ColorfulPage = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500' />
      <div className='container mx-auto py-8'>
        <h2 className='mb-4 text-2xl font-medium'>Colorful Cards</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <Card
            title='Colorful Card Title 1'
            imageSrc='https://images.unsplash.com/photo-1614878760027-1e2b2d7b8f24'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            likes={10}
            bookmarks={5}
          />
          <Card
            title='Colorful Card Title 2'
            imageSrc='https://images.unsplash.com/photo-1614878760027-1e2b2d7b8f24'
            description='Sed fringilla, arcu nec tincidunt blandit, mi nibh hendrerit tellus.'
            likes={20}
            bookmarks={8}
          />
          <Card
            title='Colorful Card Title 3'
            imageSrc='https://images.unsplash.com/photo-1614878760027-1e2b2d7b8f24'
            description='Etiam at libero vitae mauris tempor pulvinar.'
            likes={15}
            bookmarks={12}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorfulPage;
