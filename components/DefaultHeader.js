import React, { useState, useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { mockUser } from './data';
import { MobileMenu } from './MobileMenu';

export const DefaultHeader = () => {
	const { data: session } = useSession();
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				// hide profile menu when click outside.
				setShowProfileMenu(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuRef]);

	const toggleProfileMenu = () => {
		if (!showProfileMenu) {
			// show profile menu
			setShowProfileMenu(true);
		} else {
			// hide profile menu
			setShowProfileMenu(false);
		}
	};

	return (
		<DefaultContainer>
			<HeaderContainer>
				<LeftContainer>
					<LogoContainer>
						<Link href='/' passHref>
							<Logo
								src='/assets/Presence.js-logo-white.png'
								alt='Presence logo'
							/>
						</Link>
					</LogoContainer>
					<NavContainer>
						<Link href='/' passHref>
							<NavItem className='w-20 h-26 text-gray-item bg-item-button-hover '>
								<Anchor href='/'>Home</Anchor>
							</NavItem>
						</Link>
						<NavItem className='w-20 h-26 text-gray-item  bg-item-button-hover '>
							<Anchor href='https://docs.yomo.run/' target='_blank'>
								Docs
							</Anchor>
						</NavItem>
						<NavItem className='w-20 h-26 text-gray-item   bg-item-button-hover '>
							<Anchor
								href='https://github.com/yomorun/presencejs'
								target='_blank'
							>
								Github
							</Anchor>
						</NavItem>
						<NavItem className='w-24 h-26  text-gray-item  bg-item-button-hover '>
							<Anchor
								href='https://github.com/yomorun/react-cursor-chat'
								target='_blank'
							>
								Examples
							</Anchor>
						</NavItem>
					</NavContainer>
				</LeftContainer>
				{/* <TeamProfileContainer> */}
				{/* <PersonalTeam>
						<TeamText>Team</TeamText>
						<PersonalText 
						  onClick={() =>handleLogOut()}>Log Out</PersonalText>
					</PersonalTeam> */}
				<ProfileContainer>
					<div className='relative inline-block text-left'>
						<div>
							<ProfileImage
								src={session?.user?.image || mockUser.image}
								alt='Personal Profile Logo'
								onClick={toggleProfileMenu}
							/>
						</div>
						<div
							className={
								'origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none' +
								(showProfileMenu ? '' : ' hidden')
							}
							role='menu'
							aria-orientation='vertical'
							aria-labelledby='menu-button'
							tabIndex={-1}
							ref={menuRef}
						>
							<div className='py-1' role='none'>
								<a
									href='#'
									className='text-gray-700 block px-4 py-2 text-sm font-bold'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-0'
								>
									{session?.user?.name || mockUser.name}
								</a>
							</div>
							<div className='py-1' role='none'>
								<button
									type='submit'
									className='text-gray-700 block w-full text-left px-4 py-2 text-sm'
									role='menuitem'
									tabIndex='-1'
									id='menu-item-1'
									onClick={() => signOut()}
								>
									Sign out
								</button>
							</div>
						</div>
					</div>
				</ProfileContainer>
				{/* </TeamProfileContainer> */}
				<MobileMenu />
			</HeaderContainer>
		</DefaultContainer>
	);
};

const DefaultContainer = tw.section`w-full h-16  flex justify-center  bg-black cursor-pointer exo  `;
const HeaderContainer = tw.div`w-9/12 h-full  flex justify-between items-center cursor-pointer  `;
const LeftContainer = tw.div`w-8/12 md:w-7/12 h-full flex items-center gap-x-6 leftContainer-defaultHeader-mobile `;
const LogoContainer = tw.div`w-44 h-20 min-w-100`;
const Logo = tw.img`w-32 md:w-full h-full object-contain`;
const NavContainer = tw.ul`w-full h-full hidden md:flex items-center  gap-x-2  `;
// lg:flex
const NavItem = tw.li`text-center text-color-item text-md `;
const Anchor = tw.a`text-white`;

const TeamProfileContainer = tw.div`w-full lg:w-1/6 h-10  flex justify-between  items-center `;
const PersonalTeam = tw.div`w-24 h-10  flex flex-wrap  pl-3`;
const TeamText = tw.span` text-sm  text-team-color text-sm`;
const PersonalText = tw.span`text-white text-sm`;

const ProfileContainer = tw.div`w-10 h-10   object-contain   rounded-full border-2 border-white bg-blue-500`;
const ProfileImage = tw.img`w-full h-full rounded-full min-w-32`;
