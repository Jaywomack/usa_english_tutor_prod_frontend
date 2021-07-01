const AmericanFlagHeader = () => {
  return (
    <div
      className='flag-container h24 w-full flex items-center'
      style={{
        background: 'rgb(5,0,255)',
        background:
          'linear-gradient(90deg, rgba(5,0,255,1) 0%, rgba(255,255,255,1) 49%, rgba(255,0,32,1) 100%)'
      }}
    >
      <h2 className='mt-12 mb-1 border-b-2 border-gray-700 pb-6 text-3xl lg:text-4xl ml-6'>
        <span className='text-red-600'>USA</span>{' '}
        <span className='text-white'>English</span>{' '}
        <span className='text-blue-400 '>Tutor</span>
      </h2>
    </div>
  );
};
export default AmericanFlagHeader;
