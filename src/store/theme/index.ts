// ** Redux Imports
import { AppStateTypes } from '@/interfaces/app'
import { createSlice } from '@reduxjs/toolkit'

const defaultTheme: any = localStorage.getItem('theme')
const menuType: any = localStorage.getItem('menuType')

const initialState: AppStateTypes = {
    theme: defaultTheme ? defaultTheme : 'light',
    defaultTheme: 'light',
    menuType: menuType || 'collepse'
}

export const appThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        collepseMenu: (state) => {
            if (state.menuType === 'full') {
                localStorage.setItem('menuType', 'collepse')
                state.menuType = 'collepse'
            } else {
                localStorage.setItem('menuType', 'full')
                state.menuType = 'full'
            }
        }
    },
})

export const {
    collepseMenu
} = appThemeSlice.actions


export default appThemeSlice.reducer
