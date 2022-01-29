import React from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const DefaultHeader = () => {
	const { data: session } = useSession();
	return (
		<Wrapper>
			<HeaderContainer>
				<LeftContainer>
					<LogoContainer>
						<Link href='/' passHref>
							<Logo>Presencejs</Logo>
						</Link>
					</LogoContainer>
					<NavContainer>
						{/* <NavItem><Anchor href="https://yomo.run/" target="_blank">Home</Anchor></NavItem> */}
						<Link href='/' passHref>
							<NavItem className='w-20 h-26 text-gray-item bg-item-button-hover '>
								<Anchor href='/'>
								  Home
							</Anchor>
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
				<TeamProfileContainer>
					<PersonalTeam>
						{/* <TeamText>Team</TeamText>
						<PersonalText>Personal</PersonalText> */}
					</PersonalTeam>
					<ProfileContainer>
						<ProfileImage
							src={session?.user?.image || '/avatar.png'}
							alt='Personal Profile Logo'
						/>
					</ProfileContainer>
				</TeamProfileContainer>
			</HeaderContainer>
		</Wrapper>
	);
};

const Wrapper = tw.section`w-full h-16  flex justify-center  bg-black cursor-pointer`;
const HeaderContainer = tw.div`w-9/12 h-full  flex justify-between items-center cursor-pointer `;
const LeftContainer = tw.div`w-7/12 h-full flex items-center gap-x-6  `;
const LogoContainer = tw.div`w-24 h-8`;
const Logo = tw.div` text-white text-xl`;
const NavContainer = tw.ul`hidden lg:flex  items-center  gap-x-2`;
const NavItem = tw.li`text-center text-color-item text-md`;
const Anchor = tw.a`text-white`;

const TeamProfileContainer = tw.div`w-full lg:w-1/6 h-10  flex justify-between  items-center `;
const PersonalTeam = tw.div`w-24 h-10  flex flex-wrap  pl-3`;
const TeamText = tw.span` text-sm  text-team-color text-sm`;
const PersonalText = tw.span`text-white text-sm`;

const ProfileContainer = tw.div`w-10 h-10   object-contain   rounded-full border-2 border-white bg-blue-500`;
const ProfileImage = tw.img`w-full h-full rounded-full`;
