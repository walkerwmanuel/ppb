#!/bin/sh -eu
if [ -z "${BACKEND_URL:-}" ]; then
    BACKEND_URL="http://localhost:3001"
fi
if [ -z "${SUBSCRIPTION_LINK:-}" ]; then
    SUBSCRIPTION_LINK="https://buy.stripe.com/test_5kA03l9J69CdcZa4gh"
fi
if [ -z "${LIFETIME_LINK:-}" ]; then
    LIFETIME_LINK="https://buy.stripe.com/test_5kAdUb7AYg0B8IUfZ1"
fi
if [ -z "${WEB_DOMAIN:-}" ]; then
    WEB_DOMAIN="http://localhost:5173"
fi

cat <<EOF
window.REACT_APP_BACKEND='$BACKEND_URL';
window.REACT_APP_SUBLINK='$SUBSCRIPTION_LINK';
window.REACT_APP_LIFETIME_LINK='$LIFETIME_LINK';
window.REACT_APP_WEB_DOMAIN='$WEB_DOMAIN';

EOF