import React from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

export const Header = () => {
	return (
		<Wrapper>
			<NavContainer>
				<LogoItem>
					<Logo src='/assets/Presence.js-logo-white.png' alt='Presence logo' />
				</LogoItem>
				<Link href='/console' passHref>
					<ConsoleItem>
						<ConsoleText>Console</ConsoleText>
					</ConsoleItem>
				</Link>
			</NavContainer>
		</Wrapper>
	);
};

const Wrapper = tw.section`w-full h-40  flex justify-center  bg-black cursor-pointer text-white`;
const NavContainer = tw.div`w-9/12 h-full  flex justify-between items-center cursor-pointer `;
const LogoItem = tw.div` w-44 h-22`;
//md:h-16 md:w-32
const Logo = tw.img`w-full h-full object-contain`;

const ConsoleItem = tw.div`w-24 h-10  bg-personal-team  flex justify-center items-center rounded-md `;
const ConsoleText = tw.span`text-white text-lg  `;
//md:text-base  md:text-center md:h-8 md:w-20 md:pt-1
