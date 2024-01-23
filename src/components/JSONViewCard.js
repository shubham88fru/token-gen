import {
  JsonView,
  allExpanded,
  darkStyles,
  defaultStyles,
} from "react-json-view-lite";
import { InfinitySpin } from "react-loader-spinner";
import "react-json-view-lite/dist/index.css";

function JSONViewCard({ loading, apiRes }) {
  const starter = {
    fill: "the form on left",
    and: "click submit",
  };
  const json = apiRes || starter;
  return loading ? (
    <div className="flex-item card card--loader">
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  ) : (
    <div className="flex-item card card--jsonview">
      <JsonView
        data={json}
        shouldExpandNode={allExpanded}
        style={{ ...defaultStyles, fontSize: "2rem", borderRadius: "25px" }}
      />
    </div>
  );
}

export default JSONViewCard;
