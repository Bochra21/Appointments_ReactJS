import PropTypes from "prop-types";
import { forwardRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

// constant
const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = "",
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      image,
      title,
      subtitle,
      location,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? "1px solid" : "none",
          backgroundColor: "#FCFDFE",
          borderColor: theme.palette.primary[200] + 25,
          ":hover": {
            boxShadow: boxShadow
              ? shadow || "0 2px 14px 0 rgb(32 40 45 / 8%)"
              : "inherit",
          },
          ...sx,
        }}
      >
        <CardHeader
          sx={headerSX}
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={image}
                  alt="Image"
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
                <div>
                  <Typography variant="h4">
                    {darkTitle ? (
                      <Typography variant="h3">{title}</Typography>
                    ) : (
                      title
                    )}
                  </Typography>
                  <Typography variant="h5">
                    {darkTitle ? (
                      <Typography variant="h5">{subtitle}</Typography>
                    ) : (
                      subtitle
                    )}
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon />
                <Typography variant="h5">{location}</Typography>
              </div>
            </div>
          }
          action={secondary}
        />

        {/* content & header divider */}
        {title && <Divider />}
        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  image: PropTypes.string, // PropType for the image source
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default MainCard;
