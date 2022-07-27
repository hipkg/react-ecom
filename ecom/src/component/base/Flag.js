import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const App = () => {
  const [selected, setSelected] = useState("IN");
  const onSelect = (code) => setSelected(code);

  const showSelectedLabel = true;
  const showSecondarySelectedLabel = true;
  const showOptionLabel = true;
  const showSecondaryOptionLabel = true;

  return (
    <div className="demo-wrapper">
      <ReactFlagsSelect
        countries={[ "IN", "US", "GB", "FR", "DE", "IT"]}
        customLabels={{ IN: "India",  US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }}
        className={"flag"}
        selected={selected}
        onSelect={onSelect}
        searchable={true}
        showSelectedLabel={showSelectedLabel}
        showSecondarySelectedLabel={showSecondarySelectedLabel}
        selectedSize={15}
        showOptionLabel={showOptionLabel}
        showSecondaryOptionLabel={showSecondaryOptionLabel}
        optionsSize={16}
      />
    </div>
  );
}

export default App;