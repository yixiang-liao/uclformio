import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFileWaveform } from "react-icons/fa6";

const Sidebar = () => (
  <Nav className="sidebar-left">
    <h2><FaFileWaveform />表單總覽</h2>
    <hr/>
    <div className='li'>
      <Nav.Item>
        <Nav.Link as={Link} to="/form1">工程估價單1</Nav.Link>
      </Nav.Item>
    </div>
    <div className='li'>
      <Nav.Item>
        <Nav.Link as={Link} to="/form2">工程估價單2</Nav.Link>
      </Nav.Item>
    </div>
    {/* <div className='li'>
      <Nav.Item>
        <Nav.Link as={Link} to="/FormioForm1">Formio工程估價單1</Nav.Link>
      </Nav.Item>
    </div>
    <div className='li'>
      <Nav.Item>
        <Nav.Link as={Link} to="/FormioForm2">Formio工程估價單2</Nav.Link>
      </Nav.Item>
    </div> */}
  </Nav>
);

export default Sidebar;
