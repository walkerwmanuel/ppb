/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import Page404 from "lib/pages/404";

import PricingPage from "lib/pages/pricing";
import Home from "lib/pages/home";
import PrivacyPage from "lib/pages/privacy";
import ContactPage from "lib/pages/contact";
import FeaturePage from "lib/pages/features";
import TermsPage from "lib/pages/terms";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

const Routings = () => {
  return (
    <Routes>
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyEmailPasswordPreBuiltUI])} 
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/features" element={<FeaturePage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routings;
