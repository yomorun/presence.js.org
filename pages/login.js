import React from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { getProviders, signIn } from 'next-auth/react';

export async function getServerSideProps(context) {
	return {
		props: {
			providers: await getProviders(context),
		},
	};
}

export default function Login({ providers }) {
	return (
		<Wrapper>
			<RegisterContainer>
				<LogoSection>
					<LogoContainer>
						<Link href='/' passHref>
							<Logo
								src='/assets/Presence.js-logo-black.png'
								alt='Presence logo'
							/>
						</Link>
					</LogoContainer>
				</LogoSection>
				<LogInSection>
					<LogInContainer>
						<LogInText>Log In</LogInText>
					</LogInContainer>
					{Object.values(providers).map((provider) => {
						return (
							<LoginProviderContainer
								key={provider.name}
								onClick={() => signIn(provider.id, { callbackUrl: '/console' })}
							>
								{provider.name === 'GitHub' && (
									<GithubAvatar
										src='/assets/github-avatar.png'
										alt='Github avatar logo'
									/>
								)}
								<SignInText>Sign in with {provider.name}</SignInText>
							</LoginProviderContainer>
						);
					})}
				</LogInSection>
			</RegisterContainer>
		</Wrapper>
	);
}

const Wrapper = tw.main`w-full h-screen flex justify-center py-20  bg-gray-200`;
const RegisterContainer = tw.div`w-4/5 md:w-2/5 h-80 flex justify-center flex-col gap-y-12   `;
//2xl:h-60 2xl:gap-y-8  xs:w-1/2
const LogoSection = tw.section`w-full h-20 flex justify-center `;
const LogoContainer = tw.div`w-48 h-24`;
const Logo = tw.img`w-full h-full object-contain `;
const LogoText = tw.div`text-4xl text-black exo`;

const LogInSection = tw.section`w-full h-full flex justify-center flex-col  bg-white py-4 px-3 lg:px-10 gap-y-10 `;
//3xl:gap-y-6 3xl:px-6 3xl:py-2  2xl:gap-y-4 2xl:py-4 2xl:px-4 2xl:py-px
const LogInContainer = tw.div` w-full h-10 flex justify-center border-b-2 border-gray-200  `;
// 2xl:h-8  xs:h-8
const LogInText = tw.span`text-2xl text-black  `;
// 2xl:text-xl      xs:text-lg

const LoginProviderContainer = tw.div`w-full h-14 flex items-center justify-center bg-black px-6 gap-x-10 cursor-pointer `;
//3xl:gap-x-6  3xl:px-4 2xl:gap-x-4 2x:px-2 2xl:h-12 xl:gap-x-3  xs:h-10
const GithubAvatar = tw.img`w-10 h-10 object-contain border-2 rounded-full bg-white ml-0 lg:ml-6`;
// 3xl:w-8 3xl:h-8 3xl:ml-4   2xl:w-6 2xl:h-6 2xl:ml-2 xl:ml-px xs:h-4 xs:w-4
const SignInText = tw.span`text-base lg:text-lg text-white flex-1 `;
//3xl:text-base  2xl:text-sm  xl:text-xs  xs:text-xs
