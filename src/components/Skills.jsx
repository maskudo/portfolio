import Skill from './Skill';

export default function Skills({ user }) {
  return (
    <div id='skills' className='my-32'>
      <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500'>Skills</h3>
      <div className='flex items-center justify-center gap-4 flex-wrap mt-8 w-1/4 mx-auto'>
        {'skills' in user &&
          user.skills.map((skill) => <Skill skill={skill} />)}
      </div>
    </div>
  );
}
