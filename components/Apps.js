import React from 'react';
import tw from 'tailwind-styled-components';
import { CollectionApps } from './CollectionApps';

export const Apps = ({ userApps }) => {
	return (
		<Wrapper>
			{userApps?.map(({ id, name, avatar, server, secret }) => (
				<CollectionApps
					key={id}
					appID={id}
					name={name}
					avatar={avatar}
					server={webSocket || process.env.NEXT_PUBLIC_DEFAULT_SERVER}
					app_secret={secret}
					hide_secret='********************'
				/>
			))}
		</Wrapper>
	);
};

const Wrapper = tw.section`w-full h-full  grid grid-cols-3 gap-4 content-start gap-4 px-12 py-10  bg-gray-300`;
