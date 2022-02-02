import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			profile(profile) {
				return {
					id: profile.id,
					name: profile.login,
					email: profile.email,
					image: profile.avatar_url,
				};
			},
		}),
	],
	secret: process.env.SECRET,
	session: {
		jwt: true,
	},
	pages: {
		signIn: '/login',
	},
});

// GITHUB_CLIENT_SECRET=8028e169a551955912f189cab5a28a9f009b934e
// SECRET=yomo-presence-server-presence-yomo-run-cursor-chat
