import { THEME_MODE } from "@/constants/config";

const state = {
    theme: localStorage.getItem('theme') || THEME_MODE.dark
};

const mutations = {
    setTheme(state: any, theme: string) {
        state.theme = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle(THEME_MODE.dark, theme === THEME_MODE.dark);
    }
};

const actions = {
    toggleTheme({ commit, state }: any) {
        const newTheme = state.theme === THEME_MODE.dark ? THEME_MODE.light : THEME_MODE.dark;
        commit('setTheme', newTheme);
    }
};

const getters = {
    currentTheme: (state: any) => state.theme
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
