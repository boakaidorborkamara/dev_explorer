const customizeDefaultTheme = (createTheme) => {
  // customize MUI default theme
  const theme = createTheme({
    typography: {
      fontFamily: ["Fira Code", "monospace"].join(","),
    },
  });

  return theme;
};

export default customizeDefaultTheme;
