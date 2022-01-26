import React from 'react';
import tw from 'tailwind-styled-components'
import Link from "next/link"

export const Header = () => {
  return (
  <Wrapper>
      <LogoContainer>
        <Link href="/" passHref>
           <Logo src='/favicons/favicon.ico' alt='YoMo logo' />
        </Link>
      </LogoContainer>
      <NavContainer>
        <NavItem><Anchor href="https://yomo.run/" target="_blank">Home</Anchor></NavItem>
        <NavItem><Anchor href="https://docs.yomo.run/" target="_blank">Docs</Anchor></NavItem>
        <NavItem><Anchor href="https://github.com/yomorun/presencejs" target="_blank">Github</Anchor></NavItem>
        <NavItem><Anchor href="https://github.com/yomorun/react-cursor-chat" target="_blank">Examples</Anchor></NavItem>
      </NavContainer>
  </Wrapper>
  )
};

const Wrapper = tw.section`w-full h-16 bg-yellow-400 px-10  flex justify-between items-center bg-slate-900 cursor-pointer`
const LogoContainer = tw.div`w-12 h-12 `
const Logo = tw.img`w-full h-full object-cover shrink-0 `
const NavContainer = tw.ul`flex  items-center  gap-x-4`
const NavItem = tw.li`text-lg text-white `
const Anchor = tw.a`text-white`
