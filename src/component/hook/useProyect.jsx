import {useState} from 'react'

const useProyect = () => {
    const [showInicial, setShowInicial] = useState(false)
    const [showAdvance, setShowAdvance] = useState(false)

    const handleShow = (ide) => {
        if(ide == "inicial"){
            setShowInicial(!showInicial)
        }else{
            setShowAdvance(!showAdvance)
        }
    }

  
  return {
    showInicial,
    showAdvance,
    handleShow
  }
    
}

export default useProyect