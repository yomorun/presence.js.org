import { getSession } from 'next-auth/react';
import tw from 'tailwind-styled-components';
import jwt from 'jsonwebtoken';
import { Header } from '../components/Header';
import { Apps } from '../components/Apps';
import { mockApps, mockUser } from '../components/data';

export async function getServerSideProps(context) {
  // get user from session
	const session = await getSession(context);
	let user;
	if (session && session.user) {
		user = session.user;
	} else {
		user = mockUser;
	}

	const { name, email, image } = user;
	// token
	const token = jwt.sign(
		{
			github_id: name,
			avatar: image,
			email,
		},
		process.env.SECRET,
		{ expiresIn: 7 * 24 * 60 * 60 } // 7 days
	);

	// get the user's apps
	let apps = [];
	try {
		const response = await fetch(
			`${process.env.PRESENCE_SERVER_URL}/api/v1/apps`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const result = await response.json();
		if (result && result.data && Array.isArray(result.data)) {
			apps = result.data;
		}
	} catch (err) {
		console.log(err);
		apps = mockApps;
	}

	return {
		props: {
			apps,
		},
	};
}

export default function Home({ apps }) {
	return (
		<YoMoPresence>
			<Header />
			<YoMoAdmin>
				<Apps userApps={apps} />
			</YoMoAdmin>
		</YoMoPresence>
	);
}

const YoMoPresence = tw.main`w-full h-screen flex flex-col `;
const YoMoAdmin = tw.section`w-full h-full flex`;

Home.auth = true;
