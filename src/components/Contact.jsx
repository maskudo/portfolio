import Social from './Social';

export default function Contact({ user }) {
  return (
    <div className='my-32'>
      <h3 className='text-center  text-transparent bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500' id='contact'>
        Find me on
      </h3>
      <div
        id='links'
        className=' mt-6 flex items-center justify-center gap-4 flex-wrap'
      >
        {'socials' in user &&
          user.socials.map((social) => <Social social={social} />)}
      </div>
    </div>
  );
}
