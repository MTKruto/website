export const title = "Source Map";

export const parent = "/#misc";

export const hide_toc = true;

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  const blockStyle = {
    padding: "12px",
    width: "100%",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "border-bottom": "1px solid #000",
    "border-right": "1px solid #000",
    "box-sizing": "border-box",
  } as const;

  const gridStyle = {
    display: "grid",
    "grid-template-columns": "repeat(6, 1fr)",
    "border-top": "1px solid #000",
    "border-left": "1px solid #000",
    "font-size": "14px",
    "min-width": "400px",
  } as const;

  const containerStyle = {
    "overflow-x": "auto",
  } as const;

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>0_deps</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>0_errors</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>0_update_processor</div>
        <div style={{ ...blockStyle, "grid-column": "span 6" }}>1_utilities</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>2_connection</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>2_storage</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>2_tl</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>3_errors</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>3_transport</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>3_types</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>4_constants</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>4_errors</div>
        <div style={{ ...blockStyle, "grid-column": "span 2" }}>4_session</div>
        <div style={{ ...blockStyle, "grid-column": "span 6" }}>5_client</div>
      </div>
    </div>
  );
};
