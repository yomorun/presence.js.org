import React, { useState } from 'react';
import Link from 'next/link';

export const MobileMenu = () => {
	const [showMobileMenu, setShowMobileeMenu] = useState(false);

	const toggleMenu = () => {
		setShowMobileeMenu(!showMobileMenu);
	};

	return (
		<div className='md:hidden relative inline-block text-left'>
			<div>
				<svg
					xmlns='<http://www.w3.org/2000/svg>'
					id='menu-button'
					className='w-10 h-10 cursor-pointer md:hidden block text-white'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
          onClick={toggleMenu}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
			<div
				className={
					'origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-gray-700 block px-4 py-2 text-base' +
					(showMobileMenu ? '' : ' hidden')
				}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabIndex={-1}
			>
				<div className='py-1' role='none'>
					<Link
						href='/'
						className='text-gray-700 block px-4 py-2 text-sm font-bold'
						role='menuitem'
						tabIndex='-1'
						id='menu-item-0'
					>
						Home
					</Link>
				</div>
				<div className='py-1' role='none'>
					<a href='https://docs.yomo.run/' target='_blank' rel='noreferrer'>
						Docs
					</a>
				</div>
				<div className='py-1' role='none'>
					<a
						href='https://github.com/yomorun/presencejs'
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
				</div>
				<div className='py-1' role='none'>
					<a
						href='https://github.com/yomorun/react-cursor-chat'
						target='_blank'
						rel='noreferrer'
					>
						Examples
					</a>
				</div>
			</div>
		</div>
	);
};
