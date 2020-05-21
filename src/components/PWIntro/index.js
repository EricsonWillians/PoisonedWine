import React from 'react'
import { Row, Col } from "antd";
import PWLogo from "../../assets/logo.svg";

import { IntroLogo, LogoWrapper } from './styled';

const PWIntro = () => {
    return (
        <LogoWrapper>
            <IntroLogo src={PWLogo}>
            </IntroLogo>
        </LogoWrapper>
    )
}

export default PWIntro;