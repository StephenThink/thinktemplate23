const cookie = function () {
    // Replace 'API_ENDPOINT' with the actual URL of your API endpoint
    const API_ENDPOINT = '/api/globals/site_admin';
    let GoogleActive = false;
    let ShowCookieBox = false;

    // Get references to DOM elements
    const cookiePopup = document.getElementById('cookiePopup');
    const btnAccept = document.getElementById('btnAccept');
    const btnReject = document.getElementById('btnReject');

    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    const hasRejectedCookies = localStorage.getItem('cookiesRejected');

    // If cookies have not been accepted or rejected, make the API request to get data
    if (!hasAcceptedCookies && !hasRejectedCookies) {
        // Make the API request using fetch
        fetch(API_ENDPOINT)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Assuming the API returns JSON data
            })
            .then((data) => {
                // Handle the collection data here
                GoogleActive = data.data.analytics_active;
                ShowCookieBox = data.data.show_cookie_dialog;

                // Show cookie dialog if required
                if (ShowCookieBox) {
                    // Process GoogleTag based on the retrieved data
                    ProcessingGoogleTag(GoogleActive);
                    showCookieDialog();
                }
            })
            .catch((error) => {
                console.error('Error fetching collection data:', error);
            });
    }

    // Function to show the cookie dialog
    function showCookieDialog() {
        if (!hasAcceptedCookies && !hasRejectedCookies) {
            // Show the cookie popup if not accepted or rejected yet
            cookiePopup.classList.remove('hidden');

            // Handle reject button click
            btnReject.addEventListener('click', () => {
                // Hide the cookie popup
                cookiePopup.classList.add('hidden');
                // Set a flag in localStorage to indicate that the user rejected cookies
                localStorage.setItem('cookiesRejected', 'true');
                // Optionally, you may want to handle the user's rejection behavior (e.g., restrict certain functionalities)
            });
        }
    }

    // Function to process GoogleTag based on whether it is present or not
    function ProcessingGoogleTag(haveTag) {
        if (haveTag) {
            // Find the script element with 'googletagman' in its src attribute
            const scripts = document.getElementsByTagName('script');
            let result = null;
            let cookieTag = null;

            for (let i = 0; i < scripts.length; i++) {
                const script = scripts[i];

                // Check if the 'src' attribute contains 'googletagman'
                if (script.src.includes('googletagman')) {
                    cookieTag = script;
                    break; // Exit the loop once we find the desired element
                }
            }

            // Find the index of "?id=" in the URL
            const index = cookieTag.src.indexOf("?id=");

            if (index !== -1) {
                // Get the substring after "?id="
                result = cookieTag.src.substring(index + 4); // Adding 4 to exclude "?id="
                AcceptButton(result);
            } else {
                console.error('No Result');
            }
        } else {
            console.error('No Google Tag Detected');
            btnAccept.classList.add('hidden')
            btnReject.textContent = 'Dismiss'
        }
    }

    // Function to handle accept button click and set Google Analytics
    function AcceptButton(googleTag) {
        // Handle accept button click
        btnAccept.addEventListener('click', () => {
            // Hide the cookie popup
            cookiePopup.classList.add('hidden');

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', googleTag, {
                cookie_flags: 'max-age=31536000;samesite=none;secure;',
            });

            // Save the user's choice to localStorage
            localStorage.setItem('cookiesAccepted', 'true');
            // Optionally, you may want to reload the page or perform other actions after accepting cookies
        });
    }


};

export default cookie;
