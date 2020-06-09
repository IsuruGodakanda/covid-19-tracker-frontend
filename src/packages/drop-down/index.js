import React from 'react';

const DropDown = () => {
  const [open, setOpen] = React.useState(false);

  const onClickHandle = () => {
    setOpen(!open);
  };

  const escFunction = (event) => {
    if (event.keyCode === 27 || event.key === 'Esc' || event.key === 'Escape') {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <div className='relative hidden sm:block sm:ml-6'>
      <button
        type='button'
        className='relative z-20 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white'
        onClick={onClickHandle}
      >
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
          alt='Your avatar'
        />
      </button>
      <button
        type='button'
        aria-label='Click outside'
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`${open ? 'block' : 'hidden'} fixed inset-0 h-full w-full bg-black opacity-50 cursor-default z-20`}
      />
      <div
        className={`${open ? 'block' : 'hidden'} absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20`}
      >
        <a href='/' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>
          Account settings
        </a>
        <a href='/' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>
          Support
        </a>
        <a href='/' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>
          Sign out
        </a>
      </div>
    </div>
  );
};

export default DropDown;
