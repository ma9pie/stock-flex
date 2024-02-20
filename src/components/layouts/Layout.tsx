import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  ${tw``};
`;
const Content = styled.div`
  ${tw`p-6`};
`;
