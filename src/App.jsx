import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { backGroundColorAtom } from './store/atoms/color'
import { memo } from 'react'


function App() {
  return <RecoilRoot>
    <ColorChanger />
  </RecoilRoot>
}

function ColorChanger() {
  const backgroundColor = useRecoilValue(backGroundColorAtom)
    return (
      <div className='container' style={{
        backgroundColor: backgroundColor,
      }}>
        <div className='floater-div'>
          <Button color={"Red"}/>
          <Button color={"Yellow"}/>
          <Button color={"Black"}/>
          <Button color={"Purple"}/>
          <Button color={"Green"}/>
          <Button color={"Blue"}/>
          <Button color={"Default"}/>
          <Input />
        </div>
      </div>
    )
}

const Input = memo(() => {
  const setBackgroundColor = useSetRecoilState(backGroundColorAtom)

  return <input type="text" placeholder='Hex Value' onChange={(e) => {
    setBackgroundColor(e.target.value)
  }}/>
})

const  Button = memo(({color}) => {
  const setBackgroundColor = useSetRecoilState(backGroundColorAtom)
  
  return <button className={color} onClick={() => {
    if(color === 'Default')
      setBackgroundColor('wheat')
    else
      setBackgroundColor(color)
  }}>{color}</button>
})

export default App
