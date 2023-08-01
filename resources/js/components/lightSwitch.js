const lightSwitch = () => {
    const html = document.documentElement;
    const lightswitch = document.querySelector('.switch');

    if (!lightswitch) return; // No need to continue if the switch element is not found.

    const toggleDarkMode = () => {
        const isDarkMode = html.classList.contains('dark');
        html.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('thinkcreative.theme', isDarkMode ? 'light' : 'dark');
    };

    lightswitch.addEventListener('click', toggleDarkMode);

    // Watch for Dark mode on the system, only when it's changed.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        html.classList.toggle('dark', event.matches);
        lightswitch.classList.toggle('on', event.matches);
        localStorage.setItem('thinkcreative.theme', event.matches ? 'dark' : 'light');
    });

    // Dark mode initial setup
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const storedTheme = localStorage.getItem('thinkcreative.theme');
    const initialTheme = storedTheme || preferredTheme;
    html.classList.toggle('dark', initialTheme === 'dark');
    lightswitch.classList.toggle('on', initialTheme === 'dark');
};

export default lightSwitch;
