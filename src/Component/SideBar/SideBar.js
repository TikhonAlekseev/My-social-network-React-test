import React from 'react'
import "./sidebar.css"
import {Route,BrowserRouter, NavLink} from "react-router-dom"


const SideBar =() => {

    return(
            <aside className="sidebar">
                <NavLink to ="/profile" className="sidebar__link">Мой профиль</NavLink>
                <NavLink to ="/dialogs" className="sidebar__link">Диалоги</NavLink>
                <a href="#" className="sidebar__link">Настройки</a>
                <NavLink to ="/users" className="sidebar__link">Поиск друзей</NavLink>
            </aside>
    )
}

export default SideBar