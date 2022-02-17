import React, { useEffect, useState } from 'react';
import { DefaultHeader } from '../components/DefaultHeader';
import tw from 'tailwind-styled-components';
import { getSession } from 'next-auth/react';
import jwt from 'jsonwebtoken';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
			data: apps && apps.length ? apps[0] : {},
		},
	};
}

export default function Console({ data }) {
	const [secretVisible, setSecretVisible] = useState(false);
	const [iconVisible, setIconVisible] = useState(true);

	//Handle secret visibility
	const handleSecretVisible = () => {
		setSecretVisible(!secretVisible);
		setIconVisible(!iconVisible);
	};

	//Handle icon visibility
	const handleHideVisible = () => {
		setIconVisible(!iconVisible);
		setSecretVisible(!secretVisible);
	};

	//Copy to clipboard function
	//useState
	const [copied, setCopied] = useState(false);

	async function copyTextToClipboard(text) {
		if ('clipboard' in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand('copy', true, text);
		}
	}

	// onClick handler function for the copy button
	const handleCopyClick = () => {
		// Asynchronously call copyTextToClipboard
		copyTextToClipboard(data.secret)
			.then(() => {
				// If successful, update the isCopied state value
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//UseState for handleCopyAppID function
	const [isCopied, setIsCopied] = useState(false);
	//Handle Copy App ID to clipboard
	const handleCopyAppID = () => {
		copyTextToClipboard(data.id)
			.then(() => {
				// If successful, update the isCopied state value
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<ConsoleContainer>
			<DefaultHeader />
			<PresenceHeader>
				<PresenceBox>
					<PresenceMain>
						<PresenceTitle>Presence</PresenceTitle>
						{/* <PresenceBorderIconContainer>
                        <BorderColorIcon className='="w-full h-full object-contain text-gray-300' />
                    </PresenceBorderIconContainer> */}
					</PresenceMain>
					{/* <PresenceDescriptionContainer>
                            <PresenceDescription>Free Tier</PresenceDescription>
                               <DescriptionDot></DescriptionDot>
                                 <PresenceDescription>Global</PresenceDescription>
                                <DescriptionDot></DescriptionDot>
                            <PresenceDescription>2k commands per day</PresenceDescription>
                        </PresenceDescriptionContainer> */}
				</PresenceBox>
			</PresenceHeader>
			<PresenceContainer>
				<PresenceDetailsContainer>
					<DetailsContainer>
						<DetailsHeader>Details</DetailsHeader>
					</DetailsContainer>
				</PresenceDetailsContainer>
			</PresenceContainer>
			<InfoContainer>
				<PersonalPresenceDetailsContainer>
					<ColumnDetails>
						<div className='text-gray-500'>Region</div>
						<div>Global</div>
					</ColumnDetails>
					<ColumnDetails>
						<div className='text-gray-500'>Server</div>
						<div>
							{data.server || process.env.NEXT_PUBLIC_DEFAULT_SERVER}
						</div>
					</ColumnDetails>
					<ColumnDetails>
						<div className='text-gray-500'>app_id</div>
						<div className='flex justify-start'>
							<AppIdInput type='text' value={data.id} id='' readOnly={true} />
							<AppIdClipboardButton onClick={() => handleCopyAppID()}>
								{isCopied ? (
									<AppIdClipboardButtonText>Copied</AppIdClipboardButtonText>
								) : (
									<ClipboardContainerApp>
										<ContentCopyIcon className='w-full h-full object-contain text-gray-400' />
									</ClipboardContainerApp>
								)}
							</AppIdClipboardButton>
						</div>
					</ColumnDetails>
					<ColumnDetails>
						<div className='text-gray-500'>app_secret</div>
						<div className='flex justify-start'>
							<AppSecretInput
								type='text'
								value={secretVisible ? data.secret : '************************'}
								id=''
								readOnly={true}
							/>
							<ClipboardContainer onClick={() => handleCopyClick()}>
								{copied && secretVisible ? (
									<ClipboardText>Copied</ClipboardText>
								) : (
									<ClipboardContainerApp>
										<ContentCopyIcon className='w-full h-full object-contain text-gray-400' />
									</ClipboardContainerApp>
								)}
							</ClipboardContainer>
							{!secretVisible ? (
								<>
									<VisibilityContainer
										key={data.id}
										onClick={() => handleHideVisible()}
									>
										<VisibilityIcon className='w-6 h-6 object-contain  text-gray-500' />
									</VisibilityContainer>
								</>
							) : (
								<>
									<VisibilityContainer
										key={data.id}
										onClick={() => handleSecretVisible()}
									>
										<VisibilityOffIcon className='w-6 h-6 object-contain  text-gray-500' />
									</VisibilityContainer>
								</>
							)}
						</div>
					</ColumnDetails>
				</PersonalPresenceDetailsContainer>
			</InfoContainer>
		</ConsoleContainer>
	);
}

Console.auth = true;

const ConsoleContainer = tw.main` w-full h-screen  flex flex-col exo  `;
const PresenceHeader = tw.div`w-full h-20 flex justify-center bg-gray-100  `;
const PresenceBox = tw.div`w-9/12 h-full flex flex-col justify-center  `;
const PresenceTitle = tw.h1`text-3xl text-black`;
const PresenceDescriptionContainer = tw.div`w-80 h-6 flex justify-between items-center `;
const PresenceDescription = tw.p`text-sm text-black`;
const DescriptionDot = tw.div`w-1 h-1 rounded-full bg-gray-300`;
const PresenceMain = tw.div`w-44 h-6 flex justify-between items-center `;
const PresenceBorderIconContainer = tw.div`w-8 h-6 flex items-center `;

const PresenceContainer = tw.section`w-full h-14 flex   justify-center mt-8  `;
const PresenceDetailsContainer = tw.div`w-9/12 h-full flex flex-col  `;
const DetailsContainer = tw.div`w-full h-8  border-details-item   flex items-center`;
const DetailsHeader = tw.h1`text-xl text-black w-24 h-full text-black`;

const InfoContainer = tw.div`w-full flex justify-center items-center `;
const PersonalPresenceDetailsContainer = tw.div`w-9/12 flex flex-col lg:flex-row justify-around bg-gray-200 rounded`;
const ColumnDetails = tw.div`flex flex-col justify-center py-6 px-6 lg:px-0`;
const AppIdInput = tw.input`w-full h-8 border-none  px-2  outline-none text-xs text-black `;
const AppIdClipboardButton = tw.button`w-8 h-full flex  items-center justify-center `;
const AppIdClipboardButtonText = tw.span`text-xs px-3 text-clipboard`;
const ClipboardContainerApp = tw.div`w-6 h-6 flex justify-center items-center outline-none `;
const AppSecretInput = tw.input`w-full h-8 border-none px-2   focus:outline-none text-xs text-black `;

const ClipboardText = tw.span`text-xs px-3 text-clipboard`;
const ClipboardContainer = tw.div`w-8 h-8 flex justify-center items-center focus:outline-none cursor-pointer`;
const VisibilityContainer = tw.div`w-8 h-8 right-30   flex justify-center items-center outline-none ml-3 cursor-pointer`;
