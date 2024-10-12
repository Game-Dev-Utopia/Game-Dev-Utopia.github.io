const GoogleTagManager = () => {

    return (
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-GGQ8NSHNDR" // Place your GTM code here
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    );
  };
  
export default GoogleTagManager;


// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-GGQ8NSHNDR"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-GGQ8NSHNDR');
// </script>