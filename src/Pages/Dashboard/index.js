import React from "react";
// import UsePanel from "./UserPanel";
import UserPanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";

import { Row, Container } from "reactstrap";

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

const cardItems = [
  { id: "patients", title: "Total Patients:", icon: "ri-user-line", },
  { id: "appointments", title: "Total Appointments:", icon: "ri-calendar-check-line" },
  { id: "doctors", title: "Doctors:", icon: "ri-stethoscope-line" },
  { id: "investigations", title: "Exam & Investigations:", icon: "ri-search-eye-line" },
  { id: "treatment", title: "Treatment Plans:", icon: "ri-clipboard-line" },
  { id: "prescriptions", title: "Prescriptions:", icon: "ri-file-list-3-line" },
  { id: "invoices", title: "Total Invoices:", icon: "ri-file-text-line" },
  { id: "expense", title: "Expense Counts:", icon: "ri-coins-line" },
  { id: "lab", title: "Lab Reports:", icon: "ri-flask-line" },
  { id: "insurance", title: "Insurances:", icon: "ri-shield-check-line" },
  { id: "inventories", title: "Inventories:", icon: "ri-archive-line" },
  { id: "tasks", title: "Tasks:", icon: "ri-task-line" }
];

const Dashboard = () => {
  document.title = "Dashboard | Upzet - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumbs title=" " breadcrumbItem=" " /> */}
          {/* User Panel Charts */}
          {/* <UsePanel /> */}
      <div>
        <UserPanel cardData={cardItems} itemsPerRow={3} />
      </div>

          <Row>
            {/* Overview Chart */}
            {/* <OverView /> */}
            {/* Social Source Chart */}
            {/* <SocialSource /> */}
          </Row>

          <Row>
            {/* Order Stats */}
            {/* <OrderStatus /> */}
            {/* Notifications */}
            {/* <Notifications /> */}
            {/* Revenue by Location Vector Map */}
            {/* <RevenueByLocation /> */}
          </Row>

          {/* Latest Transaction Table */}
          {/* <LatestTransation /> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
