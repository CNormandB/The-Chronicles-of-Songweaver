import { useState, useEffect, useRef } from 'react'
import './Gameplay.css'
import handleSkillCheckButton from '../components/handleSkillCheckButton'

function Gameplay() {
  const [username, setUsername] = useState('player 1')
  const [userId, setUserId] = useState('4')
  const [currentSituation, setCurrentSituation] = useState('1')
  const [options, setOptions] = useState([])
  const [narratorText, setNarratorText] = useState('')
  const [image, setImage] = useState('')
  const [characterClass, setCharacterClass] = useState('Wizard')
  const [scrollPosition, setScrollPosition] = useState(0);
  const [skillCheckOptions, setSkillCheckOptions] = useState([
   {
    optionId: 5,
    enabled: false
  }
  ])
  const specialButtonRef = useRef(null);
  const textareaRef = useRef(null)///

  ////////////////////////////////////////////////////////////////////
 
  const setLoggedInUser = async () => {
    try {
      const res = await fetch("http://localhost:5431/")
      const jsonData = await res.json()
      // console.log(jsonData)
      setUserId(jsonData[0].user_id)
      setUsername(jsonData[0].username)
    } catch (error) {
      console.log(error.message)
    }
  }
  // setLoggedInUser()

  //update narratorText function and textarea SCROLL--------------------------------------------------
  const updateNarratorText = async (text) => {
    const characters = text.split('');
    let typedText = '';

    for (let i = 0; i < characters.length; i++) {
      typedText += characters[i];
      setNarratorText((prevText) => prevText + characters[i]);
      await delay(30); // Adjust the delay as needed for typing speed
    }

    setScrollPosition(textareaRef.current.scrollHeight);
    Promise.resolve()
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    // Ensure that textareaRef is initialized before setting scroll position
    if (textareaRef.current) {
      // Scroll to the bottom of the textarea
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [narratorText]); 

  //get situation-------------------------------------------------------------------
  // const getSituation = async(id) => {
  //   try {
  //     const res = await fetch(`http://localhost:5432/situation/${id}`)
  //     const situationData = await res.json()
  //     setCurrentSituation(situationData[0].situation_id)
  //     setImage(situationData[0].image_link)
  //     updateNarratorText(situationData[0].situation_text)
  //     loadOptions(currentSituation)
  //     console.log("update narratorText has ran!!!")
  //     //set situation as state num value
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

//render options buttons---------------------------------------------------------------



  const renderOptionsButtons = (option) => {
    

    const specialOptionsIdsArray = [5, 9, 11, 12, 16, 20]
    const specialOptionEnabled = (() => {
      for (const skillCheckOption of skillCheckOptions) {
        if (skillCheckOption.optionId === option.option_id && skillCheckOption.enabled ) {
          return true
        } else {
          return false
      }
    }});

    if (specialOptionsIdsArray.includes(option.option_id) && specialOptionEnabled) {
      return (
        //render  button, if already attempted skillcheck
        <button
          ref={specialButtonRef}
          className='m-1 mt-2 options rounded-0 bg-black '
          key={option.option_id}
          id='specialButton'
          onClick={() =>  handleSpecialButtonClick(option.option_id, characterClass)}
        >
          enabled BUTTON BITCH{option.option_name}
        </button>
      )
    } else if (specialOptionsIdsArray.includes(option.option_id) && (!specialOptionEnabled)) {
      // render disabled avalable skillcheck button type
      return(
        <button
            className='m-1 mt-2 options rounded-0 bg-special disabled'
            key={option.option_id}
            id='specialButton'
            // onClick={() => handleSpecialButtonClick(option.option_id,  characterClass)}
          >
            DISABLED  BUTTON  {option.option_name}
          </button>
      )
    } else {
       return (
        // Render normal button type for regular button
        <button
          className='m-1 mt-2 options rounded-0 bg-black '
          key={option.option_id}
          onClick={() => handleButtonClick(option.destination_situation, option.option_text)}
        >
          {option.option_name}
        </button>
      );
    }
  }




  //handleSpecialButtonClick---------------------------------------------------------
  const handleSpecialButtonClick = (optionId, characterClass ) => {
    // const specialButton = document.getElementById('specialButton');
    const specialButton = specialButtonRef.current

    // Check if the button is disabled
    if (specialButton && !specialButton.classList.contains('disabled') ) {// make it check state for specialbuttons array objects with special buttons option, and enabled
      // Perform your skill check logic here
      
      handleSkillCheckButton(optionId, characterClass, updateNarratorText);
      console.log("pretend that skill check func happens now!!! COOL!!")

      // Add a "disabled" class to the button
      specialButton.classList.add('disabled');
      //update state array of specialbuttons objects for button to be enabled: false
      setSkillCheckOptions(prevOptions => [
        ...prevOptions.map(option => 
          option.optionId === optionId ? { ...option, enabled: false } : option
        )
      ]);
    }

  };


  //save game function-----------------------------------------------------
  const saveGameHandler = async (currentSituation, userId ) => {
    try {
      const res = await fetch(`http://localhost:5431/update-situation/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({currentSituation: currentSituation}),
      })
      const jsonData = await res.json()
      console.log(jsonData)
    } catch (error) {
      console.log(error.message)
    }
  }

  //load game function------------------------------------------------------
  const loadGameHandler = async (userId) => {
    try {
      const res = await fetch(`http://localhost:5431/${userId}`)
      const jsonData = await res.json()
      setCurrentSituation(jsonData[0].current_situation)

    } catch (error) {
      console.log(error.message)
    }
  }



  const loadOptions = async(currentSituation) => {
    try {
      const res = await fetch(`http://localhost:5431/options/${currentSituation}`)
      const optionsData = await res.json()
      setOptions(optionsData)



    } catch (error) {
      console.log(error.message)
    }
  }
  

  /////////////////////////////////////////////////////////////////////////////////////////
  // if (currentSituation === 1) {

  //     const fetchData = async () => {
  
  //         try {
  //           const res = await fetch(`http://localhost:5432/situation/${currentSituation}`);
  //           const situationData = await res.json();
  //           setImage(situationData[0].image_link);
            
  //           updateNarratorText(situationData[0].situation_text);
  //           console.log("updateNarratorTExt called like a bitch")
  //           const optionsData = await loadOptions(currentSituation);
  //           const specialButtonEnabled = optionsData.some(
  //             (option) => option.option_id === 5 && option.enabled
  //           );
  //           setSkillCheckOptions((prevOptions) =>
  //             prevOptions.map((option) =>
  //               option.optionId === 5 ? { ...option, enabled: specialButtonEnabled } : option
  //             )
  //           );
  //         } catch (error) {
  //           console.log(error.message);
  //         }
  //       }
    
  //     fetchData();
  // };

  //USE EFFECTS ----------------------------------------------------------------------------------------

  useEffect(() => {
    
    const fetchData = async () => {
      let isInitialMount = true;
      
        try {
          const res = await fetch(`http://localhost:5431/situation/${currentSituation}`);
          const situationData = await res.json();
          setImage(situationData[0].image_link);
          if (isInitialMount && currentSituation === '1') {
            setNarratorText(situationData[0].situation_text)//situation1 text instantly appears, but at least it wont dble load
            // updateNarratorText("YO MAMA FAT");
            isInitialMount = false;
          }    
              
          const optionsData = await loadOptions(currentSituation);
          const specialButtonEnabled = optionsData.some(
            (option) => option.option_id === 5 && option.enabled
            );
            setSkillCheckOptions((prevOptions) =>
            prevOptions.map((option) =>
            option.optionId === 5 ? { ...option, enabled: specialButtonEnabled } : option
            )
            );
            
          } catch (error) {
            console.log(error.message);
          }
        
    }
  
    fetchData();
  }, []);

  useEffect(() => {
    
    const fetchData = async () => {
      
      if (currentSituation !== "1") {
        try {
          const res = await fetch(`http://localhost:5431/situation/${currentSituation}`);
          const situationData = await res.json();
          setImage(situationData[0].image_link);
          updateNarratorText(situationData[0].situation_text);
          
          const optionsData = await loadOptions(currentSituation);
          const specialButtonEnabled = optionsData.some(
            (option) => option.option_id === 5 && option.enabled
            );
            setSkillCheckOptions((prevOptions) =>
            prevOptions.map((option) =>
            option.optionId === 5 ? { ...option, enabled: specialButtonEnabled } : option
            )
            );
            
          } catch (error) {
            console.log(error.message);
          }
        }
    }
  
    fetchData();
  }, [currentSituation]);




  // console.log(options)


  //handle button click ---------------------------------------------------------------------
  const handleButtonClick = (destinationSituation, narratorText) => {
    setNarratorText(narratorText)
    setCurrentSituation(destinationSituation)
    console.log(`Navigating to situation ${destinationSituation}`);
  };



 
//_________________________________________________JSX_______________________________________________________________
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //___________________________________________________________________________________________________
  return (
    <>
      <h2 className='user-greeting mb-4' >Welcome to the game : {username} </h2>

    <div>
      

<div >

          <div className='image-frame'>
            <div className='image-container'>
              <img
                className='situation-image'
                src={image}
                alt="720p Image"
              />
            </div>
          </div>

{/* _______________________________TEXT AREA BOX_______________________________________________ */}
      <div>
        <div className='mt-3'>
          <p className='mb-0'></p>
          <textarea
            ref={textareaRef}
            className='w-50 bg-black'
            rows="5"
            cols="50"
            readOnly
            value={narratorText}
            style={{ scrollTop: scrollPosition }}
          />
        </div>
      </div>


    </div>

{/* ___________________________________OPTIONS BUTTONS_____________________________*/}
    <div className='w-50 d-flex mx-auto options-container'>
      {options.map((option) => (

        renderOptionsButtons(option)

      ))}
    </div>
   

{/* ________________SAVE AND LOAD BUTTONS ____________________________________________ */}
        <div className='mt-4 '>
          <button
            className='m-2 mt-2 options rounded-0 bg-black rounded-4 p-1'
            onClick={() => saveGameHandler(currentSituation, userId)}
          >
            SAVE
          </button>
          <button
            className='m-3 mt-2 options rounded-0 bg-black rounded-4 p-1'
            onClick={() => loadGameHandler(userId)}
          >LOAD</button>
        </div>
      </div>
    </>
  )
}

export default Gameplay

