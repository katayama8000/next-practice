import Image from 'next/image';
import { FaBookmark, FaHeart } from 'react-icons/fa';

const ExamplePage = () => {
  return (
    <div className='container mx-auto py-8'>
      <h2 className='mb-4 text-2xl font-medium'>Example Cards</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg'>
          <div className='relative h-56'>
            <Image src='/example-image-1.jpg' layout='fill' objectFit='cover' />
          </div>
          <div className='p-4'>
            <h3 className='text-lg font-medium'>Example Card Title 1</h3>
            <p className='mt-2 text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat finibus ex, vitae porttitor magna
              iaculis in.
            </p>
            <div className='mt-4 flex items-center justify-between'>
              <div className='flex'>
                <div className='mr-4 flex items-center'>
                  <FaHeart className='mr-2 text-red-500' />
                  <span className='text-gray-600'>10</span>
                </div>
                <div className='flex items-center'>
                  <FaBookmark className='mr-2 text-blue-500' />
                  <span className='text-gray-600'>5</span>
                </div>
              </div>
              <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>Read More</button>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg'>
          <div className='relative h-56'>
            <Image src='/example-image-2.jpg' layout='fill' objectFit='cover' />
          </div>
          <div className='p-4'>
            <h3 className='text-lg font-medium'>Example Card Title 2</h3>
            <p className='mt-2 text-gray-600'>
              Sed fringilla, arcu nec tincidunt blandit, mi nibh hendrerit tellus, ut gravida odio justo vitae massa.
            </p>
            <div className='mt-4 flex items-center justify-between'>
              <div className='flex'>
                <div className='mr-4 flex items-center'>
                  <FaHeart className='mr-2 text-red-500' />
                  <span className='text-gray-600'>20</span>
                </div>
                <div className='flex items-center'>
                  <FaBookmark className='mr-2 text-blue-500' />
                  <span className='text-gray-600'>8</span>
                </div>
              </div>
              <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>Read More</button>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg'>
          <div className='relative h-56'>
            <Image src='/example-image-3.jpg' layout='fill' objectFit='cover' />
          </div>
          <div className='p-4'>
            <h3 className='text-lg font-medium'>Example Card Title 3</h3>
            <p className='mt-2 text-gray-600'>
              Etiam at libero vitae mauris tempor pulvinar. Suspendisse sed leo euismod, pharetra dolor et, sollicitudin
              nunc.
            </p>
            <div className='mt-4 flex items-center justify-between'>
              <div className='flex'>
                <div className='mr-4 flex items-center'>
                  <FaHeart className='mr-2 text-red-500' />
                  <span className='text-gray-600'>15</span>
                </div>
                <div className='flex items-center'>
                  <FaBookmark className='mr-2 text-blue-500' />
                  <span className='text-gray-600'>12</span>
                </div>
              </div>
              <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
