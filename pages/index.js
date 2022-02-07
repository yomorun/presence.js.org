import tw from 'tailwind-styled-components';
import { Header } from '../components/Header';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { useSession } from 'next-auth/react';
import "../styles/Home.module.css"

export default function Home() {
	const { status } = useSession();
	return (
		<YoMoPresence>
			<Header />
			<YoMoAdmin>
				<NewYoMoEra>
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
					<LinearButtonContainer>
					  <ButtonContainer>
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
					  </ButtonContainer>
				    </LinearButtonContainer>
				</NewYoMoEra>
			</YoMoAdmin>
		</YoMoPresence>
	);
}

const YoMoPresence = tw.main`w-full h-screen flex flex-col  bg-black `;
const YoMoAdmin = tw.section`w-full h-full flex justify-center`;
const NewYoMoEra = tw.div`w-full lg:w-9/12 h-full  flex justify-center items-center flex-col bg-black `;
//md:py-8
const TitleContainer = tw.div`w-full lg:w-9/12 flex justify-center flex-col `;
const Title = tw.div`text-white text-center text-size-title exo-font font-semibold  text-home-title `;
//md-home:text-3xl
const TitleAnimationContainer = tw.div`text-title-animation flex  h-20 items-center justify-center text-white text-center text-size-title `;
//md:text-3xl
const Animation = tw.div`text-white text-center text-size-title  exo-font font-semibold text-home-title-animation `;
//md:text-3xl

const PresenceInfoContainer = tw.div`w-full lg:w-9/12 mt-12 mb-12 px-12 flex  justify-center flex-col`;
const Message = tw.span`text-white text-center text-size-message text-2xl text-message-color text-home-message`;

const LinearButtonContainer = tw.div`w-56 h-14 linear-size-button  mb-12 linear-background-container flex justify-center items-center rounded-md linear-home-button`
const ButtonContainer = tw.div`w-52 h-10  flex  justify-center items-center  bg-black  button-home-size `
// const ButtonContainer = tw.div`w-56 h-14 mb-12 flex  justify-center box2 bg-black   `;
// md:w-52 md:h-12
// const Button = tw.button` text-center  text-sm bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-white rounded-xl  `;
const Button = tw.button` text-center  text-sm  px-4 text-white rounded-xl  exo-font font-semibold  text-home-button`
//md:text-xs
