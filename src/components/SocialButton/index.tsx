import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Wrapper, Title } from './styles';

interface SocialButtonProps extends RectButtonProps {
  svg: React.FC<SvgProps>;
  title: string;
}

function SocialButton(props: SocialButtonProps) {
  const { svg: Svg, title, ...restProps } = props;

  return (
    <Container {...restProps}>
      <Wrapper>
        <Svg />
      </Wrapper>

      <Title>{title}</Title>
    </Container>
  );
}

export default SocialButton;
