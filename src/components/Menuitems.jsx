import React from 'react'

const styling = {
    position :"absolute",
    top : "100%",
    textAlign : "center",
    opacity : "80%",
    width : "100%",
    padding : "2rem"

}

export default function Menuitems(props) {
  return (
    <div className = {props.toggleTheme ? "dark" : "light"} style = {styling}>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>

        </div>
  )
}
