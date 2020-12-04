import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/roles/roles.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import RoleUpdate from "./RoleUpdate";
import RoleCreate from "./RoleCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./roles.constants";

const RoleView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { roles: data, loading } = useSelector((state) => state.roles);

  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, parameters));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <RoleUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/${parameters}/create/${parameter}`
  ) {
    return <RoleCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/${parameters}/create/${parameter}`}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
      >
        {`CREATE ${parameter.toUpperCase()}`}
      </a>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader mt-15" />
      ) : (
        <AppTable
          data={data}
          columns={columns}
          actionItems={actionItems}
          actions={actions}
          constants={constants}
        />
      )}
    </React.Fragment>
  );
};

RoleView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

RoleView.defaultProps = {
  match: {},
};

export default RoleView;
