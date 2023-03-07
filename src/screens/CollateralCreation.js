import React from "react";
import ButtonComponent from "../components/button/ButtonComponent";
import DataTable from "../components/data-table/DataTable";
import InputFields from "../components/fields/InputField";
import ListOfValue from "../components/fields/ListOfValue";
import SelectField from "../components/fields/SelectField";
import Header from "../components/header/HeaderComponent";
import Label from "../components/label/Label";
import { FaHandsHelping } from "react-icons/fa";
import {
  BsFillPersonCheckFill,
  BsPersonXFill,
  BsPersonCheck,
  BsPersonX,
} from "react-icons/bs";
import { Tabs } from "@mantine/core";
import TextAreaField from "../components/fields/TextArea";

const CollateralCreation = () => {
  return (
    <div>
      {/* <div>
        <Header
          icon={<FaHandsHelping size={28} />}
          title="collateral creation"
        />
      </div> */}
      <div
        style={{
          padding: "5px",
          border: "none",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          // margin: "10px",
          // justifyContent: "center",
          // display: "grid",
          // placeItems: "center",
          // width: "100%",
          margin: "20px",
          // textAlign: 'center'
          // width: '100%'
          borderRadius: "5px",
        }}
      >
        <div>
          <InputFields
            label={"Account/Customer Search"}
            labelWidth="20%"
            inputWidth={"29%"}
            required
          />
          <ListOfValue
            label={"Customer Number"}
            labelWidth="20%"
            inputWidth={"29.7%"}
            disabled
            required
          />
          <ListOfValue
            label={"Collateral Type"}
            labelWidth="20%"
            inputWidth={"29.7%"}
            required
          />
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          margin: "20px",
          marginTop: "20px",
        }}
      >
        <Tabs color="cyan" variant="default" defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="cash">CASH</Tabs.Tab>
            <Tabs.Tab value="insurance">INSURANCE</Tabs.Tab>
            <Tabs.Tab value="property">PROPERTY</Tabs.Tab>
            <Tabs.Tab value="guarantee">GUARANTEE</Tabs.Tab>
            <Tabs.Tab value="shares/stock/security">
              SHARES/STOCK/SECURITY
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="cash" pt="xs">
            <div>
              <div
                style={{
                  display: "flex",
                  width: "",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <div
                  style={{
                    width: "27%",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <InputFields
                    label={"Collateral Number"}
                    labelWidth={"45%"}
                    inputWidth={"50%"}
                    disabled
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ flex: "0.7" }}>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Account Information</strong>
                    </div> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                      }}
                    >
                      <ListOfValue
                        label={"Source Account"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <InputFields
                        label={"Currency"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Source Balances</strong>
                    </div> */}
                    <div
                      style={{
                        display: "flex",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Source Account Balance"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                          required
                        />
                        <InputFields
                          label={"Approved Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                          required
                        />
                        <InputFields
                          label={"Collateral Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          required
                        />
                      </div>
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Total Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                          required
                        />
                        <InputFields
                          label={"Unapproved Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                          required
                        />
                        <InputFields
                          label={"Available Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "20px",
                      }}
                    >
                      <TextAreaField
                        label={"Comment"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                      />
                      <InputFields
                        label={"Rejection Reason"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "0.3" }}>
                  <div
                    style={{
                      width: "89%",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      borderRadius: "5px",
                      padding: "20px",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                  >
                    <ButtonComponent
                      label={"Attach Document"}
                      buttonBackgroundColor={"rgb(21 163 183)"}
                      buttonHeight={"40px"}
                      buttonWidth={"140px"}
                      buttonColor={"white"}
                    />
                    {/* <br></br> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          type={"date"}
                          label={"Next Review Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          type={"date"}
                          label={"Expiry Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      // textAlign: "center",
                      justifyContent: "space-between",
                      marginTop: "125px",
                    }}
                  >
                    <div></div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <ButtonComponent
                        label={"Clear"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                      <ButtonComponent
                        label={"Save"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                    </div>
                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="insurance" pt="xs">
            <div>
              <div
                style={{
                  display: "flex",
                  width: "",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <div
                  style={{
                    width: "27%",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <InputFields
                    label={"Collateral Number"}
                    labelWidth={"45%"}
                    inputWidth={"50%"}
                    disabled
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ flex: "0.7" }}>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Account Information</strong>
                    </div> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                      }}
                    >
                      <ListOfValue
                        label={"Account Number"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <ListOfValue
                        label={"Insurance Company"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <InputFields
                        label={"Insurance Code"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <ListOfValue
                        label={"Policy Type"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <InputFields
                        label={"Policy Number"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Sum Assured"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                      />
                      <InputFields
                        label={"Amount Considered"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Source Balances</strong>
                    </div> */}
                    {/* <div
                      style={{
                        display: "flex",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Source Account Balance"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Approved Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Collateral Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                        />
                      </div>
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Total Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Unapproved Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Available Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                      </div>
                    </div> */}
                  </div>
                  <div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "20px",
                      }}
                    >
                      <TextAreaField
                        label={"Comment"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                      />
                      <InputFields
                        label={"Rejection Reason"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "0.3" }}>
                  <div
                    style={{
                      width: "89%",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      borderRadius: "5px",
                      padding: "20px",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                  >
                    <ButtonComponent
                      label={"Attach Document"}
                      buttonBackgroundColor={"rgb(21 163 183)"}
                      buttonHeight={"40px"}
                      buttonWidth={"140px"}
                      buttonColor={"white"}
                    />
                    {/* <br></br> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          type={"date"}
                          label={"Next Review Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          type={"date"}
                          label={"Expiry Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      // textAlign: "center",
                      justifyContent: "space-between",
                      marginTop: "175px",
                    }}
                  >
                    <div></div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <ButtonComponent
                        label={"Clear"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                      <ButtonComponent
                        label={"Save"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                    </div>
                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="property" pt="xs">
            <div>
              <div
                style={{
                  display: "flex",
                  width: "",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <div
                  style={{
                    width: "27%",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <InputFields
                    label={"Collateral Number"}
                    labelWidth={"45%"}
                    inputWidth={"50%"}
                    disabled
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ flex: "0.7" }}>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Account Information</strong>
                    </div> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                      }}
                    >
                      <ListOfValue
                        label={"Account Number"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Property Type"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Sub Property Type"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                      />
                      <InputFields
                        label={"Ownership Name"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <InputFields
                        label={"Location"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <InputFields
                        label={"Valuer Name"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <InputFields
                        label={"Valuer Contact Number"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Market Value"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Forced Sale Value"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Amount Considered"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Source Balances</strong>
                    </div> */}
                    {/* <div
                      style={{
                        display: "flex",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Source Account Balance"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Approved Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Collateral Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                        />
                      </div>
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Total Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Unapproved Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Available Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                      </div>
                    </div> */}
                  </div>
                  <div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "20px",
                      }}
                    >
                      <TextAreaField
                        label={"Comment"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                      />
                      <InputFields
                        label={"Rejection Reason"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "0.3" }}>
                  <div
                    style={{
                      width: "89%",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      borderRadius: "5px",
                      padding: "20px",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                  >
                    <ButtonComponent
                      label={"Attach Document"}
                      buttonBackgroundColor={"rgb(21 163 183)"}
                      buttonHeight={"40px"}
                      buttonWidth={"140px"}
                      buttonColor={"white"}
                    />
                    {/* <br></br> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          type={"date"}
                          label={"Valuation Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div>
                        <InputFields
                          type={"date"}
                          label={"Next Review Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          type={"date"}
                          label={"Expiry Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      // textAlign: "center",
                      justifyContent: "space-between",
                      marginTop: "265px",
                    }}
                  >
                    <div></div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <ButtonComponent
                        label={"Clear"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                      <ButtonComponent
                        label={"Save"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                    </div>
                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="guarantee" pt="xs">
            <div>
              <div
                style={{
                  display: "flex",
                  width: "",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <div
                  style={{
                    width: "27%",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <InputFields
                    label={"Collateral Number"}
                    labelWidth={"45%"}
                    inputWidth={"50%"}
                    disabled
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ flex: "0.7" }}>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Account Information</strong>
                    </div> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                      }}
                    >
                      <ListOfValue
                        label={"Account Number"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Financial Institution"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Currency"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Deposite Type"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                      />
                      <InputFields
                        label={"Branch"}
                        labelWidth={"24%"}
                        inputWidth={"50%"}
                        required
                      />
                      <ListOfValue
                        label={"Collateral Type"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                      />
                      <InputFields
                        label={"Interest Rate"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Number of Months"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                      />
                      <InputFields
                        label={"Guarantee Amount"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Amount Considered"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Source Balances</strong>
                    </div> */}
                    {/* <div
                      style={{
                        display: "flex",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Source Account Balance"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Approved Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Collateral Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                        />
                      </div>
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Total Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Unapproved Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Available Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                      </div>
                    </div> */}
                  </div>
                  <div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "20px",
                      }}
                    >
                      <TextAreaField
                        label={"Comment"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                      />
                      <InputFields
                        label={"Rejection Reason"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "0.3" }}>
                  <div
                    style={{
                      width: "89%",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      borderRadius: "5px",
                      padding: "20px",
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                  >
                    <ButtonComponent
                      label={"Attach Document"}
                      buttonBackgroundColor={"rgb(21 163 183)"}
                      buttonHeight={"40px"}
                      buttonWidth={"140px"}
                      buttonColor={"white"}
                    />
                    {/* <br></br> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          label={"Folio Number"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          label={"Start Number"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          label={"End Number"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          type={"date"}
                          label={"Next Review Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          type={"date"}
                          label={"Expiry Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      // textAlign: "center",
                      justifyContent: "space-between",
                      marginTop: "135px",
                    }}
                  >
                    <div></div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <ButtonComponent
                        label={"Clear"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                      <ButtonComponent
                        label={"Save"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                    </div>
                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="shares/stock/security" pt="xs">
            <div>
              <div
                style={{
                  display: "flex",
                  width: "",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <div
                  style={{
                    width: "27%",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "5px",
                  }}
                >
                  <InputFields
                    label={"Collateral Number"}
                    labelWidth={"45%"}
                    inputWidth={"50%"}
                    disabled
                    required
                  />
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div style={{ flex: "0.7" }}>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Account Information</strong>
                    </div> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                      }}
                    >
                      <ListOfValue
                        label={"Account Number"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Share/Security Code"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <ListOfValue
                        label={"Index"}
                        labelWidth={"24%"}
                        inputWidth={"51%"}
                        required
                      />
                      <InputFields
                        label={"Market Value"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Number of Shares/Securities"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Security Amount"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                      <InputFields
                        label={"Amount Considered"}
                        labelWidth={"24%"}
                        inputWidth={"22%"}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {/* <div
                      style={{
                        padding: "10px",
                        marginTop: "20px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        width: "20%",
                        fontSize: "95%",
                      }}
                    >
                      <strong>Source Balances</strong>
                    </div> */}
                    {/* <div
                      style={{
                        display: "flex",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Source Account Balance"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Approved Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Collateral Amount"}
                          labelWidth={"50%"}
                          inputWidth={"45%"}
                        />
                      </div>
                      <div style={{ flex: "0.5" }}>
                        <InputFields
                          label={"Total Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Unapproved Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                        <InputFields
                          label={"Available Amount"}
                          labelWidth={"55%"}
                          inputWidth={"45%"}
                          disabled
                        />
                      </div>
                    </div> */}
                  </div>
                  <div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "5px",
                        width: "95%",
                        marginTop: "20px",
                      }}
                    >
                      <TextAreaField
                        label={"Comment"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                      />
                      <InputFields
                        label={"Rejection Reason"}
                        labelWidth={"24%"}
                        inputWidth={"75%"}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "0.3" }}>
                  <div
                    style={{
                      width: "89%",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      borderRadius: "5px",
                      padding: "20px",
                      marginTop: "20px",
                      textAlign: "center",
                    }}
                  >
                    <ButtonComponent
                      label={"Attach Document"}
                      buttonBackgroundColor={"rgb(21 163 183)"}
                      buttonHeight={"40px"}
                      buttonWidth={"140px"}
                      buttonColor={"white"}
                    />
                    {/* <br></br> */}
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          label={"Folio Number"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          label={"Start Number"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          label={"End Number"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "5px",
                        padding: "2px",
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <InputFields
                          type={"date"}
                          label={"Next Review Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                      <div style={{ marginTop: "" }}>
                        <InputFields
                          type={"date"}
                          label={"Expiry Date"}
                          labelWidth={"43%"}
                          inputWidth={"57%"}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",

                      // textAlign: "center",
                      justifyContent: "space-between",
                      marginTop: "35px",
                    }}
                  >
                    <div></div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <ButtonComponent
                        label={"Clear"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                      <ButtonComponent
                        label={"Save"}
                        buttonBackgroundColor={"rgb(21 163 183)"}
                        buttonHeight={"40px"}
                        buttonWidth={"80px"}
                        buttonColor={"white"}
                      />
                    </div>
                    {/* <div></div> */}
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      <div
        style={{
          padding: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          margin: "20px",
          marginTop: "20px",
        }}
      >
        <div
        // style={{
        //   padding: "10px",
        //   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        //   borderRadius: "5px",
        // }}
        >
          <Header
            icon={<BsPersonX size={28} />}
            title="Unapproved OR Rejected Collaterals"
          />
          <DataTable />
        </div>
        <div
          style={{
            // padding: "10px",
            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            // borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          <Header
            icon={<BsPersonCheck size={28} />}
            title="Approved Collaterals"
          />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default CollateralCreation;
