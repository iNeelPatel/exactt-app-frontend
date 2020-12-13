// ====================================== Module imports ======================================
import React, { Fragment, useState, useCallback } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { DatePicker } from "@atlaskit/datetime-picker";
import { Checkbox } from "@atlaskit/checkbox";
import { typography, colors } from "@atlaskit/theme";
import Select from "@atlaskit/select";
import { useDropzone } from "react-dropzone";
import Folder48Icon from "@atlaskit/icon-file-type/glyph/folder/48";
import Image24Icon from "@atlaskit/icon-file-type/glyph/image/24";
import Document24Icon from "@atlaskit/icon-file-type/glyph/document/24";
import Video24Icon from "@atlaskit/icon-file-type/glyph/video/24";
import PdfDocument24Icon from "@atlaskit/icon-file-type/glyph/pdf-document/24";
import Generic24Icon from "@atlaskit/icon-file-type/glyph/generic/24";
import AddIcon from "@atlaskit/icon/glyph/add";

// ====================================== File imports ======================================
import { Divider, Heading } from "../../components";
import { ReportDetailProps } from "./types";
import { SampleResultParameters } from "../../redux/types/SampleTypes";

const TestDetailsForm = (props: ReportDetailProps) => {
   const { parameters, hodOptions } = props;
   const [resultsParameters, setResultsParameters] = useState<SampleResultParameters[] | undefined>(parameters);
   const [files, setFiles] = useState<File[]>([]);

   const onDrop = useCallback(
      (acceptedFiles: File[]) => {
         const updateFiles = [...files, ...acceptedFiles];
         setFiles(updateFiles);
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },
      [files]
   );

   console.log(files);

   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

   const formatFileSize = (bytes: any, decimalPoint: any): any => {
      if (bytes === 0) return "0 Bytes";
      var k = 1000,
         dm = decimalPoint || 2,
         sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
         i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
   };

   const handleDeleteFile = (index: number): void => {
      let updateFiles = files.filter((item, idx) => index !== idx);
      setFiles(updateFiles);
   };

   return (
      <Page>
         <Grid spacing="cosy" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     let fromData: any = { ...data, resultsParameters };
                     props.onSubmit(fromData);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps} noValidate={true}>
                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={3}>
                              <Field
                                 label="Analysis date"
                                 isRequired
                                 name="analysisDate"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "ANALYSIS_DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <React.Fragment>
                                       <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="select date" />
                                       {error === "ANALYSIS_DATE_REQUIRED" ? <ErrorMessage>Analysis date is required</ErrorMessage> : null}
                                    </React.Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={3}>
                              <Field
                                 label="Complete date"
                                 isRequired
                                 name="completeDate"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "COMPLETE_DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <React.Fragment>
                                       <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="select date" />
                                       {error === "COMPLETE_DATE_REQUIRED" ? <ErrorMessage>Complete date is required</ErrorMessage> : null}
                                    </React.Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={3}>
                              <Field
                                 label="Report date"
                                 isRequired
                                 name="reportDate"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "REPORT_DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <React.Fragment>
                                       <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="select date" />
                                       {error === "REPORT_DATE_REQUIRED" ? <ErrorMessage>Report date is required</ErrorMessage> : null}
                                    </React.Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={3}>
                              <Field label="URL" name="url">
                                 {({ fieldProps }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       <Checkbox
                                          value="Generate URL number"
                                          label="Generate URL number"
                                          onChange={() => {}}
                                          name="all-parameters"
                                       />
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <Divider />
                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={12}>
                              <div className="scroll-view" style={{ overflowX: "scroll", overflowY: "scroll" }}>
                                 <div style={{ display: "flex" }}>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          minWidth: 25,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       No.
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          minWidth: 150,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Parameter
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 120,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Division
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 150,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Chemist
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 170,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Result
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 90,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Unit
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 170,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Requirement
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 50,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       NABL
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 60,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Nagative
                                    </Heading>
                                 </div>
                                 {resultsParameters?.map((parameter, idx) => {
                                    let validOptions;
                                    let invalidOptions: any;
                                    let options;
                                    if (parameter.condition_type === "options") {
                                       validOptions = parameter.validation.validOptions.split(",");
                                       invalidOptions = parameter.validation.invalidOptions.split(",");
                                       options = validOptions
                                          .concat(invalidOptions)
                                          .map((option: any) => ({ label: option, value: option }));
                                    }

                                    return (
                                       <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
                                          <div style={{ margin: 0, minWidth: 25, maxWidth: 25 }}>{idx + 1}.</div>
                                          <div style={{ margin: 0, minWidth: 150, maxWidth: 150 }}>{parameter.name}</div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 120, maxWidth: 120 }}>
                                             {parameter?.department?.get("name")}
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 150, maxWidth: 150 }}>
                                             {parameter.assign_to ? parameter.assign_to.name : "N/A"}
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 170, maxWidth: 170 }}>
                                             {parameter.condition_type === "range" ? (
                                                <TextField
                                                   type="number"
                                                   style={{ maxWidth: 170 }}
                                                   onChange={(event: any) => {
                                                      let result = event.target.value;
                                                      let resultInt = parseFloat(result);
                                                      let nagative = !(
                                                         resultInt >= parameter.validation.min && resultInt <= parameter.validation.max
                                                      );
                                                      let updateParameters: any = resultsParameters.map((data, index) =>
                                                         index === idx ? { ...data, result, nagative } : data
                                                      );
                                                      setResultsParameters(updateParameters);
                                                   }}
                                                   value={parameter.result}
                                                />
                                             ) : null}
                                             {parameter.condition_type === "options" ? (
                                                <Select
                                                   options={options}
                                                   placeholder="Select option"
                                                   onChange={(result: any) => {
                                                      let nagative =
                                                         invalidOptions.find((item: any) => item === result.value) !== undefined;
                                                      let updateParameters: any = resultsParameters.map((data, index) =>
                                                         index === idx ? { ...data, result, nagative } : data
                                                      );
                                                      setResultsParameters(updateParameters);
                                                   }}
                                                />
                                             ) : null}
                                             {parameter.condition_type === "valid" ? (
                                                <Select
                                                   options={parameter.validation.validResult
                                                      ?.split(",")
                                                      ?.concat(parameter.validation.invalidResult.split(","))
                                                      ?.map((option: any) => ({ label: option, value: option }))}
                                                   placeholder="Select option"
                                                   onChange={(result: any) => {
                                                      let invalidResult = parameter.validation.invalidResult.split(",");
                                                      let nagative = invalidResult.find((item: any) => item === result.value) !== undefined;
                                                      let updateParameters: any = resultsParameters.map((data, index) =>
                                                         index === idx ? { ...data, result, nagative } : data
                                                      );
                                                      setResultsParameters(updateParameters);
                                                   }}
                                                   value={parameter.result}
                                                />
                                             ) : null}
                                             {parameter.condition_type === "complies" ? (
                                                <TextField
                                                   style={{ maxWidth: 170 }}
                                                   onChange={(event: any) => {
                                                      let result = event.target.value;
                                                      let nagative = false;
                                                      let updateParameters: any = resultsParameters.map((data, index) =>
                                                         index === idx ? { ...data, result, nagative } : data
                                                      );
                                                      setResultsParameters(updateParameters);
                                                   }}
                                                   value={parameter.result}
                                                />
                                             ) : null}
                                             {!parameter.condition_type ? (
                                                <TextField
                                                   style={{ maxWidth: 170 }}
                                                   onChange={(event: any) => {
                                                      let result = event.target.value;
                                                      let nagative = false;
                                                      let updateParameters: any = resultsParameters.map((data, index) =>
                                                         index === idx ? { ...data, result, nagative } : data
                                                      );
                                                      setResultsParameters(updateParameters);
                                                   }}
                                                   value={parameter.result}
                                                />
                                             ) : null}
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 90, maxWidth: 90 }}>
                                             <TextField style={{ maxWidth: 90 }} value={parameter.parameter.unit} />
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 170, maxWidth: 170 }}>
                                             <TextField value={parameter.requirement} />
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 50, maxWidth: 50 }}>
                                             <Checkbox
                                                value="Generate URL number"
                                                label=""
                                                isDisabled={!parameter.condition_type ? false : true}
                                                isChecked={parameter.nabl}
                                                onChange={() => {
                                                   if (!parameter.condition_type) {
                                                      let updateParameters: any = resultsParameters.map((data, index) =>
                                                         index === idx ? { ...data, nabl: !parameter.nabl } : data
                                                      );
                                                      setResultsParameters(updateParameters);
                                                   }
                                                }}
                                                name="all-parameters"
                                             />
                                          </div>
                                          <div
                                             style={{
                                                margin: 0,
                                                paddingLeft: 4,
                                                minWidth: 60,
                                                maxWidth: 60,
                                                cursor:
                                                   (parameter.result && parameter.condition_type === "complies") ||
                                                   !parameter.condition_type
                                                      ? "pointer"
                                                      : "not-allowed",
                                             }}
                                             onClick={() => {
                                                if (
                                                   (parameter.result && parameter.condition_type === "complies") ||
                                                   !parameter.condition_type
                                                ) {
                                                   let updateParameters: any = resultsParameters.map((data, index) =>
                                                      index === idx ? { ...data, nagative: !parameter.nagative } : data
                                                   );
                                                   setResultsParameters(updateParameters);
                                                }
                                             }}
                                          >
                                             {parameter.result ? (
                                                parameter.nagative ? (
                                                   <span style={{ fontWeight: "bolder" }}>Yes</span>
                                                ) : (
                                                   <span>No</span>
                                                )
                                             ) : (
                                                <span>-</span>
                                             )}
                                          </div>
                                       </div>
                                    );
                                 })}
                              </div>
                           </GridColumn>
                        </Grid>

                        <Divider />

                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={12}>
                              <div
                                 style={{
                                    backgroundColor: colors.N10A,
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: 10,
                                    padding: 10,
                                 }}
                              >
                                 {files.map((file, idx) => (
                                    <div style={{ display: "flex", margin: 2, flexDirection: "column" }}>
                                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                          <div style={{ display: "flex" }}>
                                             {file.type.split("/")[0] === "image" ? (
                                                <Image24Icon label="image" />
                                             ) : file.type.split("/")[0] === "text" ? (
                                                <Document24Icon label="text" />
                                             ) : file.type.split("/")[0] === "video" ? (
                                                <Video24Icon label="video" />
                                             ) : file.type.split("/")[1] === "pdf" ? (
                                                <PdfDocument24Icon label="pdf" />
                                             ) : (
                                                <Generic24Icon label="file" />
                                             )}{" "}
                                             <div style={{ width: 350, overflow: "hidden", marginLeft: 20 }}>{file.name}</div>
                                          </div>
                                          <div style={{ width: 150, textAlign: "center" }}>{formatFileSize(file.size, 2)}</div>
                                          <div>
                                             <Button appearance="link" size={15} onClick={() => handleDeleteFile(idx)}>
                                                Remove
                                             </Button>
                                          </div>
                                       </div>
                                       <Divider />
                                    </div>
                                 ))}
                                 <div
                                    {...getRootProps()}
                                    style={{
                                       display: "flex",
                                       flexDirection: "column",
                                       justifyContent: "center",
                                       alignItems: "center",
                                       outline: "none",
                                    }}
                                 >
                                    {files.length === 0 ? <Folder48Icon label="file" size="medium" /> : null}
                                    <p style={{ color: colors.N500, margin: 20, marginTop: files.length === 0 ? 0 : 10 }}>
                                       {isDragActive
                                          ? "Drop file here"
                                          : "Drag 'n' drop some files here, or click on \"Add file\" button to select files"}
                                    </p>

                                    <div>
                                       <input {...getInputProps()} style={{ outline: "none", display: "none" }} />
                                       <Button appearance="primary" iconBefore={<AddIcon label="Add icon" size="small" />}>
                                          Add files
                                       </Button>
                                    </div>
                                 </div>
                              </div>
                           </GridColumn>
                        </Grid>

                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={8}>
                              <Field label="Remarks" name="remarks">
                                 {({ fieldProps }: any) => <TextField {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Authorized Signature" isRequired name="authorizedSignature">
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "REQUIRED" && "error"}
                                          options={hodOptions}
                                          placeholder="Select authorized user"
                                          validate={(value: any) => {
                                             if (!value) {
                                                return "REQUIRED";
                                             }
                                          }}
                                       />
                                       {error === "REQUIRED" && <ErrorMessage>Authorized user is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, marginBottom: 100 }}>
                           <Button appearance="link" onClick={() => {}}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Submit
                           </Button>
                        </div>
                     </form>
                  )}
               </Form>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default TestDetailsForm;
