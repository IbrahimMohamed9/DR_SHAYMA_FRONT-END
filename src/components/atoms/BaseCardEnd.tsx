import { Typography } from "@mui/material";

const BaseCardEnd = ({
  isHovered,
  date,
}: {
  isHovered: boolean;
  date: string;
}) => {
  return (
    <div
      className={`mt-auto transition-all duration-300 transform ${
        isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-90"
      }`}
    >
      <Typography
        variant="caption"
        className={`mt-1 text-xs transition-colors duration-300 text-secondary ${
          isHovered ? "text-gray-600" : "text-gray-500"
        }`}
      >
        {date}
      </Typography>
    </div>
  );
};

export default BaseCardEnd;
