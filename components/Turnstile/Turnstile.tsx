import Script from "next/script";

export function Turnstile() {
  return (
    <>
      {/* <Script id="cf-turnstile-callback">
        {`window.onloadTurnstileCallback = function () {
          window.turnstile.render('#my-widget', {
            sitekey: '${process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}',
          })
        }`}
      </Script> */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onloadTurnstileCallback"
        async={true}
        defer={true}
      />
    </>
  );
}
