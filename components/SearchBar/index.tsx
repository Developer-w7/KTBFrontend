// import '../styles/globals.css'
// import '../styles/Main.scss'
import * as React from 'react';
// import CustomButton from '../../../widgets/Button';
import styled from 'styled-components'
import Debounce from '../../utils/Debounce';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
const SearchField = styled.input(
    ({ height, background, borderRadius, width }: AppProps) => `
    align-items: center;
    justify-content: center;
    display: flex;
    width:100%;
    min-height: ${height};
    border-radius:${borderRadius};
    position:relative;
    background: ${background};
    padding-left:10px;
    border:1px solid #000;
`
)
type AppProps= {

    height?: string, background?: string, borderRadius?: string, width?: string, onChange:any
}
function SearchBar({ height, background, borderRadius, width, onChange}: AppProps) {





const [text, setText] = React.useState('');
const [count, setCount] = React.useState(10);


const handleInput=(e:React.FormEvent<HTMLInputElement>)=>{
       setText(e.currentTarget.value);
    
       onChange(e.currentTarget.value);    
      
}





  return (
    <div style={{position:'relative', width:width}}>
    
     <SearchField
      value={text}
      onChange={e => handleInput(e)}
      height={height}
      background={background}
      borderRadius={borderRadius}
      />{text ?
      <span onClick={()=>{setText(''); onChange('');}} style={{position:'absolute', right:10, top:'calc(100% - 40px)', color:'blue',cursor:'pointer'}}><CloseIcon fontSize="large"/></span>  :
      <span onClick={()=>{setText(''); onChange('');}} style={{position:'absolute', right:10, top:'calc(100% - 40px)', color:'blue',cursor:'pointer'}}><SearchIcon fontSize="large"/></span>
        }
    </div>
  )
}

export default SearchBar