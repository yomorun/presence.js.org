import '../styles/globals.css';

import { SessionProvider, useSession } from 'next-auth/react';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			{Component.auth ? (
				<Auth>
					<Component {...pageProps} />
				</Auth>
			) : (
				<Component {...pageProps} />
			)}
		</SessionProvider>
	);
}

function Auth({ children }) {
  // require login in production env.
  const isProduction = process.env.NODE_ENV === 'production';
  const { data: session } = useSession({required: isProduction})
  const isUser = !!session?.user

	if (isUser || !isProduction) {
		return children;
	}

	return (
		<div className='z-50 fixed top-0 left-0 right-0 bottom-0 bg-gray-100 z-50 flex justify-center items-center'>
			<span className='ml-2.5 text-base'>loading...</span>
		</div>
	);
}
