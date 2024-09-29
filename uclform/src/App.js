import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header'; // 导入 Header 组件
import './styles/style.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Header /> {/* 新增的页首 */}
        <Row>
          <Col xs={3}> {/* 为侧边栏添加类 */}
            <Sidebar />
          </Col>
          <Col xs={9} style={{ marginLeft: '320px', paddingTop: '10vh' }}>
            <AppRoutes />
          </Col>
          <Footer />
        </Row>
      </Container>
    </Router>
  );
};

export default App;
