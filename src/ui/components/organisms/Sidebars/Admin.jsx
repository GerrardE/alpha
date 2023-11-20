import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Admin = ({
  toggleRep, toggleReports, multiRep, toggleMultiRep,
  toggleFin, toggleFinances,
  toggle, toggleSettings,
  systems, toggleSystems,
  localisation, toggleLocalisation,
  history,
}) => {
  return (
    <React.Fragment>
      <li className="nav-item mT-30 actived">
        <a className="sidebar-link" onClick={() => history.push("/dashboard")}>
          <span className="icon-holder">
            <i className="c-black-500 ti-home" />
          </span>
          <span className="title">Dashboard</span>
        </a>
      </li>
      <li
        className={classnames("nav-item mT-30 dropdown actived", {
          open: toggleRep,
        })}
      >
        <a className="dropdown-toggle" onClick={toggleReports}>
          <span className="icon-holder">
            <i className="c-green-500 ti-clipboard" />
          </span>
          <span className="title">Reports</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </a>
        <ul className="dropdown-menu">
          <li
            className={classnames("nav-item dropdown", {
              open: multiRep,
            })}
          >
            <a className="sidebar-link" onClick={toggleMultiRep}>
              <span>Submit</span>
              <span className="arrow">
                <i className="ti-angle-right" />
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a onClick={() => history.push("/reports/attendances/create/attendance")}>Attendance</a>
              </li>
              <li>
                <a onClick={() => history.push("/reports/activityreports/create/activityreport")}>Activity</a>
              </li>
              <li>
                <a onClick={() => history.push("/reports/memberships/create/membership")}>Membership</a>
              </li>
              <li>
                <a onClick={() => history.push("/reports/trainingreports/create/trainingreport")}>Training</a>
              </li>
              <li>
                <a onClick={() => history.push("/reports/groups/create/group")}>Group</a>
              </li>
              <li>
                <a onClick={() => history.push("/reports/cells/create/cell")}>Cell</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a onClick={() => history.push("/reports/generate/zones")}>Generate</a>
          </li>
        </ul>
      </li>
      <li
        className={classnames("nav-item mT-30 dropdown actived", {
          open: toggleFin,
        })}
      >
        <a className="dropdown-toggle" onClick={toggleFinances}>
          <span className="icon-holder">
            <i className="c-pink-500 ti-credit-card" />
          </span>
          <span className="title">Finances</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a onClick={() => history.push("/finances/finances")}>Finance</a>
          </li>
          <li className="nav-item">
            <a onClick={() => history.push("/finances/assets")}>Assets</a>
          </li>
          <li className="nav-item">
            <a onClick={() => history.push("/finances/payments")}>Payments</a>
          </li>
          <li className="nav-item">
            <a onClick={() => history.push("/finances/receipts")}>Receipts</a>
          </li>
          <li className="nav-item">
            <a onClick={() => history.push("/finances/remunerations")}>Remunerations</a>
          </li>
        </ul>
      </li>
      <li
        className={classnames("nav-item mT-30 dropdown mb-4", {
          open: toggle,
        })}
      >
        <a className="dropdown-toggle" onClick={toggleSettings}>
          <span className="icon-holder">
            <i className="c-orange-500 ti-settings" />
          </span>
          <span className="title">Settings</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/zones")}>
              Zones
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/branches")}>
              Branches
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/preachers")}>
              Preachers
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/fellowships")}>
              Cells
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/events")}>
              Events
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/categories")}>
              Categories
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/downloads")}>
              Downloads
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/trainingtypes")}>
              Training Types
            </a>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/settings/activitytypes")}>
              Activity Types
            </a>
          </li>
        </ul>
      </li>
      <li
        className={classnames("nav-item mT-30 dropdown mb-4", {
          open: systems,
        })}
      >
        <a className="dropdown-toggle" onClick={toggleSystems}>
          <span className="icon-holder">
            <i className="c-blue-500 ti-pulse" />
          </span>
          <span className="title">System</span>
          <span className="arrow">
            <i className="ti-angle-right" />
          </span>
        </a>
        <ul className="dropdown-menu">
          <li
            className={classnames("nav-item dropdown", {
              open: localisation,
            })}
          >
            <a className="sidebar-link" onClick={toggleLocalisation}>
              <span>Localisation</span>
              <span className="arrow">
                <i className="ti-angle-right" />
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a onClick={() => history.push("/system/localisation/countries")}>Country</a>
              </li>
              <li>
                <a onClick={() => history.push("/system/localisation/states")}>State</a>
              </li>
              <li>
                <a onClick={() => history.push("/system/localisation/cities")}>City</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="sidebar-link" onClick={() => history.push("/system/apilogs")}>
              ApiLogs
            </a>
          </li>
        </ul>
      </li>
    </React.Fragment>
  );
};

Admin.propTypes = {
  toggleRep: PropTypes.func.isRequired,
  toggleReports: PropTypes.func.isRequired,
  multiRep: PropTypes.bool.isRequired,
  toggleMultiRep: PropTypes.func.isRequired,
  toggleFin: PropTypes.func.isRequired,
  toggleFinances: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  systems: PropTypes.bool.isRequired,
  toggleSystems: PropTypes.func.isRequired,
  localisation: PropTypes.bool.isRequired,
  toggleLocalisation: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.oneOfType([PropTypes.func]).isRequired,
  }).isRequired,
};

export default Admin;
