import Project from './Project';

export default function Projects() {
  return (
    <div
      id='projects'
      className='text-center row row-cols-2 d-flex justify-content-evenly'
    >
      <Project />
      <Project />
      <Project />
    </div>
  );
}
