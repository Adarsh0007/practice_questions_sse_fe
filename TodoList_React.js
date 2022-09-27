import "./styles.css";
import {useState} from 'react'

export default function App() {
  const [tagList, setTagList] = useState([]);
  const [tagVal, setTagVal] = useState('');
  const onBlurHandler =(e) => {
    e.preventDefault();
     //setTag(e.target.value);
     if (e.target.value.trim() !== 0) {
      setTagVal('')
      setTagList([...tagList,{name: e.target.value}])
     }
     
  }
  
  const closeHandler =(name) => {
   // alert(name)
   const updatedTagList = tagList.filter((item) => item.name !== name);
   setTagList(updatedTagList);
  }

  
  return (
    <div className="App">
      
     <input value={tagVal} placeholder="Add a tag" onChange={(e) => setTagVal(e.target.value)}onBlur={(e) => onBlurHandler(e)}/>
     <div className="">
        {tagList && tagList.length > 0 ? tagList.map((tag, index) => {
        return <Tag key={index} name={tag.name} clickHandler={closeHandler}></Tag>
        }): null}
        </div>
    </div>
  );
}


 function Tag (props)  {
   //alert(props)
   const {name, clickHandler} = props;

  return (
  name.length> 0 ? ( <div>
    <p>{name}
    <span onClick={(e) => {
      
      clickHandler(name)
    }}>x</span>
    </p>
  </div>
  )
  : null
  );
}
