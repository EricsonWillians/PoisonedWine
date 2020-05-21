import React from 'react';
import { Row, Col } from "antd";
import PWIntro from './PWIntro';
import { StContainer } from './styled';

function App() {
  return (
    <StContainer>
      <Col span={24}>
        <PWIntro/>
      </Col>
    </StContainer>
  );
}

export default App;
