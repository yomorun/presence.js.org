import React from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
	return (
		<Wrapper>
			<NavContainer>
				<LogoItem>Presencejs</LogoItem>
				<Link href='/console' passHref>
					<ConsoleItem>Console</ConsoleItem>
				</Link>
			</NavContainer>
		</Wrapper>
	);
};

const Wrapper = tw.section`w-full h-40  flex justify-center  bg-black cursor-pointer text-white`;
const NavContainer = tw.div`w-9/12 h-full  flex justify-between items-center cursor-pointer `;
const LogoItem = tw.div` text-3xl`;

const ConsoleItem = tw.div`w-24 h-8  text-lg bg-personal-team text-center `;
