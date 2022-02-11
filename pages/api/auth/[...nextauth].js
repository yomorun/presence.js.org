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



