import tw from 'tailwind-styled-components';
import { Header } from '../components/Header';
import Link from 'next/link';

export default function Home() {
	return (
		<YoMoPresence>
			<Header />
			<YoMoAdmin>
				{/* <Apps userApps={apps} /> */}
				<NewYoMoEra>
					<TitleContainer>
						<Title className=''>Make a real-time Collaboration</Title>
						<TitleAnimationContainer>
							<First>faster</First>
							{/* <Second>better</Second>
							<Third>secure</Third> */}
						</TitleAnimationContainer>
					</TitleContainer>
					<PresenceInfoContainer>
						<Message>
							Presence js is a javascript library helps you build your real-time
							web application quickly. We also provide a secure, low-latency and
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
const NewYoMoEra = tw.div`w-9/12 h-full  flex justify-center items-center flex-col bg-black`;
const TitleContainer = tw.div`w-9/12 h-68 flex  justify-center flex-col`;
const Title = tw.div`text-white text-center text-size-title`;
const TitleAnimationContainer = tw.div`text-title-animation flex items-center justify-center text-white text-center text-size-title`;
const First = tw.div`text-white text-center text-size-title`;
const Second = tw.div`text-white text-center text-size-title`;
const Third = tw.div`text-white text-center text-size-title`;

const PresenceInfoContainer = tw.div`w-9/12 h-52 flex  justify-center flex-col`;
const Message = tw.span`text-white text-center text-size-message text-2xl`;

const ButtonContainer = tw.div`w-56 h-14 flex  justify-center box2 bg-black `;
const Button = tw.button` text-center  text-sm bg-gradient-to-r from-cyan-500 to-blue-500 px-4 text-white animate-character rounded-full `;

// const Wrapper = tw.section`w-full h-40 bg-yellow-400 flex justify-center  bg-black cursor-pointer text-white`
// const NavContainer = tw.div`w-9/12 h-full  flex justify-between items-center cursor-pointer `
