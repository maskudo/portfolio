import Social from './Social';

export default function Contact() {
  return (
    <>
      <h3 className='text-center '>Find me on</h3>
      <div id='links' className='row row-cols-4 text-center m-2 p-2'>
        <Social />
        <Social />
        <Social />
        <Social />
        <Social />
        <Social />
        <Social />
      </div>
    </>
  );
}
