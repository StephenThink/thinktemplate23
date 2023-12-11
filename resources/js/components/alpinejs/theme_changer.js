export default () => ({
    isDarkMode: false,

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.updateTheme();
    },

    updateTheme() {
        const html = document.documentElement;
        const theme = this.isDarkMode ? 'dark' : 'light';
        html.classList.toggle('dark', this.isDarkMode);
        localStorage.setItem('thinkcreative.theme', theme);
    },

    init() {
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        this.isDarkMode = (localStorage.getItem('thinkcreative.theme') || preferredTheme) === 'dark';
        this.updateTheme();
    },
});
