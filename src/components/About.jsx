import { useEffect } from 'react';

export default function About({ user }) {
  return (
    <div className='py-16 text-center flex flex-col items-center' id='about'>
      <div id='pic ' className='m-auto p-auto text-center'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/portfolio-6082d.appspot.com/o/02.jpg?alt=media&token=8676e4fd-811d-47e2-9103-070da2c3cc84'
          alt='my-profile'
          className='w-40 h-40 object-cover'
        />
      </div>
      <div className=' m-4 p-4 d-flex justify-content-center'>
        <div id='text-center'>
          <h1 className='text-center text-6xl'>
            Hi, I am&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500'>
              {user.name}
            </span>
          </h1>
          <h3 className='text-center my-4'>A Full Stack developer.</h3>
          <p className='leading-7'>
            {user.university} student living in Kathmandu, Nepal.
            <br />
            Highly interested in{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500'>
              {'interests' in user &&
                user.interests.map(
                  (interest, i) =>
                    (i === user.interests.length - 1 ? 'and ' : '') +
                    interest +
                    (i === user.interests.length - 1 ? '' : ', ')
                )}
            </span>
            .
          </p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button className='py-2 px-4 rounded border-2 border-gray-300 hover:bg-gradient-to-br hover:text-white hover:border-transparent  hover:from-fuchsia-500 hover:to-pink-500'>
          <a
            href='https://firebasestorage.googleapis.com/v0/b/portfolio-6082d.appspot.com/o/MANUJ_BABU_KARKI_Dec8_2022.pdf?alt=media&token=046355f5-bfdf-46e6-84f2-14aeda64db69'
            className='no-underline text-inherit hover:text-white'
          >
            Resume
          </a>
        </button>
        <button className='hover:text-fuchsia-500'>
          <a href='https://github.com/maskudo' className='visited:text-inherit'>
            <i className='fa-brands fa-github text-2xl'></i>
          </a>
        </button>

        <button className='hover:text-fuchsia-500'>
          <a
            href='https://linkedin.com/johndoe'
            className='visited:text-inherit'
          >
            <i className='fa-brands fa-linkedin text-2xl'></i>
          </a>
        </button>
      </div>
    </div>
  );
}
