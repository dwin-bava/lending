import React from "react";
import { Select } from "@mantine/core";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";

function SelectField({ labelWidth, inputWidth, label, placeholder }) {
  //   const dat = ["male", "female", "other"];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // marginBottom: "15px",
        margin:'15px',
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
      }}
    >
      <label style={{ width: labelWidth, fontSize: "85%" }}>{label}</label>
      <Select
        placeholder={placeholder}
        style={{
          width: inputWidth,
        }}
        variant="unstyled"
        searchable
        size={"xs"}
        id="selectField"
        rightSection={
          <FiChevronDown
            style={{ marginLeft: "15px" }}
            size={18}
            color="grey"
          />
        }
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={[
          { value: "react", label: "000 - React" },
          { value: "ng", label: "001 - Angular" },
          { value: "svelte", label: "002 - Svelte" },
          { value: "vue", label: "003 - Vue" },
        ]}
      />
    </div>
  );
}

export default SelectField;
