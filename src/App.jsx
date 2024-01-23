import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { backGroundColorAtom } from './store/atoms/color'

function App() {
  return <RecoilRoot>
    <ColorChanger />
  </RecoilRoot>
}

function ColorChanger() {
  const backgroundColor = useRecoilValue(backGroundColorAtom)
    return (
      <div style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: backgroundColor,
      }}>
        <div style={{
          display: 'flex',
          position: 'absolute',
          justifyContent: 'space-between',
          padding: '5px',
          borderRadius: '20px',
          backgroundColor: 'whitesmoke',
          bottom: '30px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}>
          <Button color={"Red"}/>
          <Button color={"Yellow"}/>
          <Button color={"Black"}/>
          <Button color={"Purple"}/>
          <Button color={"Green"}/>
          <Button color={"Blue"}/>
          <Button color={"Default"}/>
        </div>
      </div>
    )
}

function Button({color}) {
  const setBackgroundColor = useSetRecoilState(backGroundColorAtom)
  return <button className={color} onClick={() => {
    if(color == 'Default')
      setBackgroundColor('wheat')
    else
      setBackgroundColor(color)
  }}>{color}</button>
}
export default App
