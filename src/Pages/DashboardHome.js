import React from 'react';
import Funnel from './DashCharts/Funnel';
import Satisfaction from './DashCharts/Satisfaction';
import Sources from './DashCharts/Sources';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toolbox from './DashCharts/Toolbox'

// this is the main dashboard page with the recruitment analytics 
// formatted with Bootstraps grid system - container, row, col
// the grid columns are then filled with the charts and the 1 card toolbox


function DashboardHome() {
  return (
    <div>
      <h2 id="dashHome">RECRUITMENT ANALYTICS</h2>
      <Container>
        <Row>
          <Col sm>
            <Satisfaction />
          </Col>
          <Col sm>
            <Sources />
          </Col>
        </Row>
        <Row id="frontspace">
          <Col sm={9}>
            <Funnel />
          </Col>
          <Col sm={3} id="frontspace">
            <Toolbox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardHome;
