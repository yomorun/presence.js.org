import tw from 'tailwind-styled-components';
import { Header } from '../components/Header';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
	//<First>faster</First>
	return (
		<YoMoPresence>
			<Header />
			<YoMoAdmin>
				{/* <Apps userApps={apps} /> */}
				<NewYoMoEra>
					<TitleContainer>
						<Title className=''>Make a real-time Collaboration</Title>
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
							{/* <Second>better</Second>
							<Third>secure</Third> */}
						</TitleAnimationContainer>
					</TitleContainer>
					<PresenceInfoContainer>
						<Message>
							Presencejs is a javascript library helps you build your real-time
							web applications quickly. We also provide a secure, low-latency and
							high-perfomance geo-distributed services to build your apps
						</Message>
					</PresenceInfoContainer>
					<ButtonContainer>
						<Link href='/console' passHref>
							<Button>Start Free in 30 seconds</Button>
						</Link>
					</ButtonContainer>
				</NewYoMoEra>
			</YoMoAdmin>
		</YoMoPresence>
	);
}

const YoMoPresence = tw.main`w-full h-screen flex flex-col  bg-black`;
const YoMoAdmin = tw.section`w-full h-full flex justify-center`;
const NewYoMoEra = tw.div`w-full lg:w-9/12 h-full  flex justify-center items-center flex-col bg-black`;
const TitleContainer = tw.div`w-full lg:w-9/12 flex justify-center flex-col`;
const Title = tw.div`text-white text-center text-size-title`;
const TitleAnimationContainer = tw.div`text-title-animation flex  h-20 items-center justify-center text-white text-center text-size-title`;
const Animation = tw.div`text-white text-center text-size-title`;
const Second = tw.div`text-white text-center text-size-title`;
const Third = tw.div`text-white text-center text-size-title`;

const PresenceInfoContainer = tw.div`w-full lg:w-9/12 mt-12 mb-12 px-12 flex  justify-center flex-col`;
const Message = tw.span`text-white text-center text-size-message text-2xl text-message-color`;

const ButtonContainer = tw.div`w-56 h-14 mb-12 flex  justify-center box2 bg-black `;
const Button = tw.button` text-center  text-sm bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-white animate-character rounded-full `;


