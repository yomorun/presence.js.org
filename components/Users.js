import React from 'react';
import tw from 'tailwind-styled-components';
import { CollectionUsers } from './CollectionUsers';
// import { githubUsers } from './data';

export const Users = ({githubUsers}) => {
  return (
      <Wrapper>

         {githubUsers?.map(({appID,name,avatar,webSocket, app_secret}) =>(
         <CollectionUsers 
           key={appID}
           appID={appID}
           name={name}
           avatar={avatar}
           webSocket={webSocket}
           app_secret={app_secret}
         />
         ))}
       
      </Wrapper>
  )
};

const Wrapper = tw.section`w-full h-full  grid grid-cols-3 gap-4 content-start gap-4 px-12 py-10  bg-gray-300`

