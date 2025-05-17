import React from "react";

interface ProgressBarProps {
  value: number; // 0 ~ 100
  height?: string;
  backgroundColor?: string;
  fillColor?: string;
  textColor?: string;
  shadowColor?: string;
  showLabel?: boolean;
  width?: string; // 💡 추가
}

const PrettyProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = "24px",
  width = "300px", // 💡 기본 고정 너비
  backgroundColor = "#f3f4f6",
  fillColor = "#4aa8d8",
  textColor = "#111827",
  shadowColor = "rgba(0, 0, 0, 0.1)",
  showLabel = true,
}) => {
  const percent = Math.max(0, Math.min(value, 100));

  return (
    <div
      style={{
        width, // 💡 고정 너비 설정
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor,
          borderRadius: "15px",
          height,
          position: "relative",
          overflow: "hidden",
          boxShadow: `inset 0 1px 2px ${shadowColor}`,
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            backgroundColor: fillColor,
            height: "100%",
            borderRadius: "15px",
            transition: "width 0.4s ease-in-out",
          }}
        />
        {showLabel && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: -10,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              color: textColor,
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            {percent}%
          </div>
        )}
      </div>
    </div>
  );
};

export default PrettyProgressBar;
