import React from 'react';
import tw from 'tailwind-styled-components'

export const CollectionUsers = ({appID, name, avatar,webSocket,app_secret}) => {
  return (
     <CollectionContainer>
       <UserProfile >
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
                    <ProfileAppIDValue>{appID}</ProfileAppIDValue>
                    <ProfileAppSecretValue>{app_secret}</ProfileAppSecretValue>
                </ProfileItemsValueContainer>
              </ProfileSecondLineContainer>
          </UserProfile>

     </CollectionContainer>
  )
};

const CollectionContainer = tw.section`w-96 h-32 bg-white px-5 py-3 flex flex-col cursor-pointer my-5`
const  UserProfile = tw.div`flex w-full h-full flex-col  text-black`
const ProfileFirstLineContainer = tw.div`flex items-center `
const ProfileImage = tw.img`w-12 h-12 object-contain rounded-full border-2 border-white`
const ProfileName = tw.div`flex ml-3`
const Name = tw.span` text-lg`

const ProfileSecondLineContainer = tw.div`flex  gap-x-3  mt-2`
const ProfileItemsTextContainer = tw.div`flex flex-col `
const ProfileWebSocketText = tw.span`text-xs`
const ProfileAppSecretText = tw.span`text-xs`
const ProfileAppIDContainer = tw.div`flex justify-end`
const ProfileAppIDText = tw.span` text-xs`

const ProfileItemsValueContainer = tw.div`flex flex-col `
const ProfileWebSocketValue = tw.span`text-xs`
const ProfileAppSecretValue = tw.span`text-xs`
const ProfileAppIDValue = tw.span`text-xs`
