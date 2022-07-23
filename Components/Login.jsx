import React from "react";

import { signIn, getProviders } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="d-flex align-items-center flex-column login p-3">
        {providers &&
          Object.values(providers).map(
            (provider) =>
              provider.id !== "credentials" && (
                <button
                  className="btn btn-outline-primary col-12 mb-3 d-flex align-items-center justify-content-center gap-2"
                  type="button"
                  key={provider.id}
                  onClick={() => {
                    signIn(provider.id, {
                      callbackUrl: `${window.location.origin}`,
                    });
                  }}
                >
                  {provider.id === "google" ? (
                    <svg
                      aria-hidden="true"
                      className="native svg-icon iconGoogle"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                        fill="#EA4335"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="svg-icon iconFacebook"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                        fill="#4167B2"
                      ></path>
                    </svg>
                  )}
                  Sign in with {provider.name}
                </button>
              )
          )}
      </div>
    </>
  );
};

export default Login;