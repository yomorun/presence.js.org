import tw from 'tailwind-styled-components';
import { Header } from '../components/Header';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { useSession } from 'next-auth/react';
import "../styles/Home.module.css"

import CursorChat from '@yomo/react-cursor-chat';
import '@yomo/react-cursor-chat/dist/cursor-chat.min.css';



export default function Home() {
	const { status } = useSession();
	return (
		<YoMoPresence>
			<Header />
			<CursorChat
                presenceURL="wss://prsc.yomo.dev"
                presenceAuth={{
                    type: 'token',
                    endpoint: '/api/auth',
                }}
                avatar="https://cursor-chat-example.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
                theme="light"
                showLatency
            />
			<YoMoAdmin>
				<YoMoAdminContainer>
					<TitleContainer>
						<Title className=''>Make real-time Collaboration</Title>
						<TitleAnimationContainer>
							<Animation>
								<Typewriter
									words={['better', 'securer', 'faster']}
									loop={4}
									// cursor
									cursorStyle='|'
									typeSpeed={70}
									deleteSpeed={50}
									delaySpeed={1000}
									// onLoopDone={handleDone}
									// onType={handleType}
								/>
							</Animation>
						</TitleAnimationContainer>
					</TitleContainer>
					<PresenceInfoContainer>
						<Message>
							Presencejs is a javascript library helps you build your real-time
							web applications quickly. We also provide a secure, low-latency
							and high-perfomance geo-distributed services to deploy your apps 
						</Message>
					</PresenceInfoContainer>
					<ButtonBackgroundContainer>
						<Link
							href={
								status !== 'authenticated' &&
								process.env.NODE_ENV === 'production'
									? '/login'
									: '/console'
							}
							passHref
						>
							<Button>Start Free in 30 seconds</Button>
						</Link>
					</ButtonBackgroundContainer>
				</YoMoAdminContainer>
			</YoMoAdmin>
		</YoMoPresence>
	);
}

const YoMoPresence = tw.main`w-full h-screen flex flex-col  bg-black `;
const YoMoAdmin = tw.section`w-full h-full flex justify-center`;
const YoMoAdminContainer = tw.div`w-full lg:w-9/12 h-full  flex justify-center items-center flex-col bg-black `;

const TitleContainer = tw.div`w-full lg:w-9/12 flex justify-center flex-col  text-title-margin-max-640 `;
const Title = tw.div`text-white text-center text-size-title exo-font font-semibold  text-home-title `;

const TitleAnimationContainer = tw.div`text-title-animation flex  h-20 items-center justify-center text-white text-center text-size-title `;
const Animation = tw.div`text-white text-center text-size-title  exo-font font-semibold text-home-title-animation `;

const PresenceInfoContainer = tw.div`w-full lg:w-9/12 mt-12 mb-12 px-12 flex  justify-center flex-col presence-info-margin-max-438`;
const Message = tw.span`text-white text-center text-size-message text-2xl text-message-color text-home-message`;

const ButtonBackgroundContainer = tw.div`w-2/5 h-36 button-background-max-438  flex justify-center items-center  button-background-container   mb-12 `;

const Button = tw.button` text-center  text-sm  px-5 py-3 text-white  border-gradient-color  exo-font font-semibold   focus:outline-none cursor-none`


