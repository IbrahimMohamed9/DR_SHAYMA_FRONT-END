import { ThemeProvider, createTheme } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { FC, ReactNode } from "react";

type RTLWraperMUIProps = {
  children: ReactNode;
  className: string;
};

const RTLWraperMUI: FC<RTLWraperMUIProps> = ({ children, className }) => {
  const theme = createTheme({ direction: "rtl" });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className={className}>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default RTLWraperMUI;
