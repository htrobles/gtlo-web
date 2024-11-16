import HeroImages from './HeroImages';

export default function Hero() {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-x-12 gap-y-8 items-center py-12'>
      <HeroImages />
      <div className='flex-1 space-y-4 lg:order-1'>
        <h1 className='text-4xl sm:hidden lg:block lg:text-6xl'>
          YOUR FAMILY
          <br />
          AWAY FROM HOME
        </h1>
        <h1 className='hidden sm:block lg:hidden text-center text-5xl md:text-6xl'>
          YOUR FAMILY AWAY FROM HOME
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          suscipit libero excepturi ratione doloremque exercitationem officia,
          ipsum enim eum aliquam quibusdam assumenda doloribus tempore facere
          aperiam, veniam dicta! Tenetur maxime, consequuntur dicta facere
          deleniti reiciendis, sunt corporis ad cum cumque ullam saepe, dolores
          ut quam numquam earum ipsam libero velit.
        </p>
        <div className='flex'>
          <input
            type='text'
            className='border border-gray-300 w-full p-2 rounded-tl-lg rounded-bl-lg'
            placeholder='Enter e-mail address'
          />
          <button className='bg-primary-400 px-8 py-4 text-white rounded-tr-lg rounded-br-lg'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
