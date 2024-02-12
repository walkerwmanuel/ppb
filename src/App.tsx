import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/theme";
import ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import "./lib/styles/styles.css";
import { BACKEND_URL, WEB_DOMAIN } from "./configvars";

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  console.log(BACKEND_URL, WEB_DOMAIN)
  SuperTokens.init(({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "SymbolTab",
        apiDomain: BACKEND_URL,
        websiteDomain: WEB_DOMAIN,
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                ]
            },
            getRedirectionURL: async (context) => {
              console.log(context.action)
              if (context.action === "SUCCESS") {
                  return "/dashboard?refresh=true";
              }
              if (context.action === "RESET_PASSWORD") {
                return "/forgot-password"
              }
              return "/auth/reset-password";
          }
        }),
        Session.init()
    ]
}))
}

const App = () => (
  <SuperTokensWrapper>
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  </SuperTokensWrapper>
);

export default App;
