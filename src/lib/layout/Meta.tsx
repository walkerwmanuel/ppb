import { Helmet } from "react-helmet";

const APP_NAME = "SymbolTab";

const Meta = () => {
  return (
    <Helmet>
      <title>Power Pack Blend</title>
      <meta name="description" content="SymbolTab Website" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/assets/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default Meta;
