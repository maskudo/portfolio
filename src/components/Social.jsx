export default function Social({ social }) {
  return (
    <div className='px-4 py-2 rounded-full border-2 border-gray-300 w-16 h-16 text-2xl hover:shadow cursor-pointer flex items-center justify-center'>
      {/* <a href={social.link}>{social.name}</a> */}
      <a href={social.link} className='hover:text-fuchsia-500 visited:text-inherit'>
        <i className={`${social.icon}`}></i>
        
      </a>
    </div>
  );
}
