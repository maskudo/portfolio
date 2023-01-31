export default function About() {
  return (
    <div id='about'>
      <div id='pic ' className='m-auto p-auto text-center'>
        <img
          src='https://avatars.githubusercontent.com/u/50748152?s=400&u=01188e174b9de12a2414bbb16ecd952a89427f45&v=4'
          alt='my-profile'
          height='200px'
        />
      </div>
      <div className='container m-4 p-4 d-flex justify-content-center'>
        <div id='text-center'>
          <h1 className='text-center'>Hi, I am Manuj Babu Karki</h1>
          <h3 className='text-center'>A Full Stack developer.</h3>
          <p>
            Tribhuwan University student living in Kathmandu, Nepal. Highly
            interested in web development, systems programming and dev-ops.
          </p>
        </div>
      </div>
    </div>
  );
}
