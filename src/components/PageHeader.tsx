import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="pages-title"
      style={{
        padding: "80px 0",
        background: "#f8f9fa",
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      <div className="container">
        {subtitle && (
          <span
            className="text-theme"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {subtitle}
          </span>
        )}
        <h2 style={{ fontSize: "42px", fontWeight: 700, margin: 0 }}>
          {title}
        </h2>
      </div>
    </div>
  );
}
