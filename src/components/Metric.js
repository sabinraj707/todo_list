import React from "react";

export const Metric = (props) => {
  const { label, value } = props;

  return (
    <article style={{width: "100%", textAlign: "center"}}>
      <p>{label}</p>
      <p style={{fontSize: 40, fontWeight: "bold", lineHeight: 0.1}}>{value}</p>
    </article>
  );
};

