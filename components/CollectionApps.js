import { useState } from 'react';
import tw from 'tailwind-styled-components';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const CollectionApps = ({
	appID,
	name,
	avatar,
	webSocket,
	app_secret,
	hide_secret,
}) => {
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
		copyTextToClipboard(app_secret)
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
		copyTextToClipboard(appID)
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
		<CollectionContainer>
			<UserProfile>
				<ProfileFirstLineContainer>
					<ProfileImage src={avatar} alt='' />
					<ProfileName>
						<Name>{name}</Name>
					</ProfileName>
				</ProfileFirstLineContainer>
				<ProfileSecondLineContainer>
					<ProfileItemsTextContainer>
						<ProfileWebSocketText>WebSocket:</ProfileWebSocketText>
						<ProfileAppIDContainer>
							<ProfileAppIDText>app_id:</ProfileAppIDText>
						</ProfileAppIDContainer>
						<ProfileAppSecretText>app_secret:</ProfileAppSecretText>
					</ProfileItemsTextContainer>
					<ProfileItemsValueContainer>
						<ProfileWebSocketValue>{webSocket}</ProfileWebSocketValue>
						<ProfileIDValueContainer>
							<ProfileAppIDValue
								type='text'
								className='hover:bg-green-100'
								value={appID}
								key={appID}
							/>
							<AppIDClipboardButton onClick={() => handleCopyAppID()}>
								{isCopied ? (
									<>
										<AppIDClipboardButtonText>Copied</AppIDClipboardButtonText>
									</>
								) : (
									<>
										<AppIDClipboardIcon>
											<ContentCopyIcon className='w-4 h-4 text-gray-400 ' />
										</AppIDClipboardIcon>
									</>
								)}
							</AppIDClipboardButton>
						</ProfileIDValueContainer>
						<ProfileAppSecretValueContainer>
							<SecretContainer>
								{!secretVisible ? (
									<ProfileHideSecret
										type='text'
										value={hide_secret}
										key={appID}
									/>
								) : (
									<ProfileAppSecretValue
										type='text'
										className='hover:bg-green-100'
										value={app_secret}
										key={appID}
									/>
								)}
								<ClipboardContainer onClick={() => handleCopyClick()}>
									{copied && secretVisible ? (
										<>
											<ClipboardText>Copied</ClipboardText>
										</>
									) : (
										<>
											<ClipboardCopyIcon>
												<ContentCopyIcon className='w-4 h-4 text-gray-400 ' />
											</ClipboardCopyIcon>
										</>
									)}
								</ClipboardContainer>
							</SecretContainer>
							<ActionContainer>
								{!secretVisible ? (
									<>
										<OpenSecretKeyIcon
											key={appID}
											onClick={() => handleHideVisible()}
										>
											<VisibilityIcon className='w-6 h-6 object-contain  text-gray-500' />
										</OpenSecretKeyIcon>
									</>
								) : (
									<>
										<HideBackStickIcon
											key={appID}
											onClick={() => handleSecretVisible()}
										>
											<VisibilityOffIcon className='w-6 h-6 object-contain  text-gray-500' />
										</HideBackStickIcon>
									</>
								)}
							</ActionContainer>
						</ProfileAppSecretValueContainer>
					</ProfileItemsValueContainer>
				</ProfileSecondLineContainer>
			</UserProfile>
		</CollectionContainer>
	);
};

const CollectionContainer = tw.section`w-96 h-42 bg-white px-5 py-3 flex flex-col rounded-md cursor-pointer my-2`;
const UserProfile = tw.div`flex w-full h-full flex-col  text-black`;
const ProfileFirstLineContainer = tw.div`flex items-center `;
const ProfileImage = tw.img`w-12 h-12 object-contain rounded-full border-2 border-white`;
const ProfileName = tw.div`flex ml-3`;
const Name = tw.span` text-lg`;

const ProfileSecondLineContainer = tw.div`flex  gap-x-3  mt-2 `;
const ProfileItemsTextContainer = tw.div`flex flex-col gap-y-3 `;
const ProfileWebSocketText = tw.span`text-xs`;
const ProfileAppSecretText = tw.span`text-xs`;
const ProfileAppIDContainer = tw.div`flex justify-end `;
const ProfileAppIDText = tw.span` text-xs`;

const ProfileItemsValueContainer = tw.div`flex flex-col  gap-y-1`;
const ProfileWebSocketValue = tw.span`text-xs`;

const ProfileAppSecretValueContainer = tw.div`flex w-full h-full `;

const SecretContainer = tw.div`w-40 h-full flex justify-start  border-2 border-gray-100  `;
const ProfileAppSecretValue = tw.input`text-xs outline-none w-full h-full cursor-pointer  text-center py-1 px-3`;
const ProfileHideSecret = tw.input`text-xs outline-none w-full h-full cursor-pointer text-center py-1 px-3 `;
const ClipboardContainer = tw.button`w-8 h-full flex  items-center justify-center `;
const ClipboardText = tw.span`text-xs px-3 text-clipboard`;
const ClipboardCopyIcon = tw.span`w-5 h-4 object-contain flex justify-center items-center`;

const ProfileIDValueContainer = tw.div`flex w-40 h-full border-2 border-gray-100 `;
const ProfileAppIDValue = tw.input`text-xs w-full h-full cursor-pointer text-center py-1 px-3 text-appID`;
const AppIDClipboardButton = tw.button`w-8 h-full flex  items-center justify-center `;
const AppIDClipboardButtonText = tw.span`text-xs px-3 text-clipboard`;
const AppIDClipboardIcon = tw.span`w-5 h-4 object-contain flex justify-center items-center`;

const ActionContainer = tw.div`w-6 h-full flex justify-center items-center  bg-gray-500 ml-2`;
const HideBackStickIcon = tw.span`w-6 h-full object-contain bg-white cursor-pointer`;
const OpenSecretKeyIcon = tw.span`w-6 h-full object-contain bg-white cursor-pointer`;
