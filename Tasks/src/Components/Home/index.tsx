import './style.css'
import { useNavigate } from 'react-router-dom'
import imgAvatar from './avatar.svg'

export function Home() {
  
  const navigate = useNavigate()


  const svgX = (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      fill='#ff0000'
      
    >
      <path        
        d="M208.48535,191.51465a12.0001,12.0001,0,0,1-16.9707,16.9707L128,144.9707,64.48535,208.48535a12.0001,12.0001,0,0,1-16.9707-16.9707L111.0293,128,47.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707L128,111.0293l63.51465-63.51465a12.0001,12.0001,0,0,1,16.9707,16.9707L144.9707,128Z"
      />
    </svg>
  )
 
  const svgCheck = (    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 511.999 511.999"
    >
      <path
        fill="#A5EB78"
        d="M427.534,73.084l-224.51,224.51c-6.051,6.051-15.863,6.051-21.914,0l-96.645-96.645L8.099,277.313 l145.785,145.785c10.127,10.127,23.862,15.816,38.183,15.816l0,0c14.32,0,28.057-5.69,38.182-15.816l273.65-273.65L427.534,73.084z"
      />
      <path
        d="M478.646,124.196L189.754,413.087c-7.993,7.992-18.043,13.442-28.902,15.872c9.066,6.425,19.956,9.955,31.215,9.955l0,0 c14.32,0,28.057-5.69,38.182-15.816l273.65-273.65L478.646,124.196z"
      />

      <path
        d="M192.068,447.014c-16.587,0-32.182-6.459-43.912-18.189L2.372,283.04c-3.163-3.163-3.163-8.292,0-11.454l76.366-76.366 	c3.164-3.163,8.292-3.163,11.455,0l28.668,28.667c3.163,3.163,3.163,8.292,0,11.454c-3.165,3.163-8.293,3.162-11.455,0l-22.94-22.94	l-64.911,64.911l140.058,140.058c8.669,8.669,20.195,13.443,32.456,13.443c12.26,0,23.785-4.775,32.456-13.443l186.951-186.952	c3.163-3.163,8.291-3.164,11.455,0c3.163,3.163,3.163,8.292,0,11.454L235.979,428.826	C224.248,440.555,208.653,447.014,192.068,447.014z"
      />
      <path
        d="M192.068,310.232c-6.303,0-12.228-2.454-16.684-6.911l-45.068-45.068c-3.163-3.163-3.163-8.292,0-11.454	c3.164-3.163,8.292-3.163,11.455,0l45.068,45.068c1.396,1.396,3.254,2.165,5.229,2.165s3.833-0.769,5.23-2.166L421.806,67.357	c3.164-3.163,8.292-3.163,11.455,0l76.366,76.366c1.518,1.518,2.372,3.579,2.372,5.727s-0.853,4.209-2.372,5.727l-63.787,63.787	c-3.164,3.163-8.292,3.162-11.455,0c-3.163-3.163-3.163-8.292,0-11.454l58.061-58.06l-64.91-64.91L208.752,303.321	C204.295,307.777,198.369,310.232,192.068,310.232z"
      />
    </svg>
  )

  const btnLogin = (
    <button
      className='btnLogin btn'
      onClick={() => navigate('/login')}
    >
      Fazer login
    </button>
  )


  const btnRegister = (
    <button
      className='btnRegister btn'      
      onClick={()=> navigate('/register')}
    >
      Me cadastrar
    </button>
  )

  const titleHomePage = (
    <h1 className='titleHomePage'>
      Gerenciamento de tarefas
    </h1>
  )

  const resumeHomePage = (
    <p className='resumeHomePage'>
      Gerencie suas tarefas com uma ferramenta prática e online 
    </p>
  )

  const inviteHomePage = (
    <p className='inviteHomePage'>
      Entre e organize suas tarefas da melhor maneira!
    </p>
  )


  const svgCheckAnimation = (
    <svg   width="153" height="400" viewBox="0 0 153 500" fill="none" xmlns="http://www.w3.org/2000/svg">

      <rect className='rect-tree' x="4.5" y="281.5" width="97" height="92" rx="9.5" fill="#FAFAFA" stroke="black" stroke-width="9" />
      <g className='paths'>      
      <path className='path-x-one'  d="M23 305C36.973 315.152 49.9843 326.889 62.6512 338.393C69.9152 344.99 80.3726 351.595 85 360" stroke="#F00A0A" stroke-width="12" stroke-linecap="round"/>
      </g>
      <g className='paths'>      
      <path className='path-x-two' d="M9 361C14.4578 360.449 20.4378 352.628 23.7581 349.56C36.2741 337.995 49.3613 328.207 64.1613 319.2C73.2478 313.67 81.7578 307.328 90.7742 301.673C93.829 299.758 97.0244 297.695 99 295" stroke="#F00A0A" stroke-width="12" stroke-linecap="round"/>
      </g>
      <rect className='rect-one' x="4.5" y="34.5" width="97" height="92" rx="9.5" fill="#FAFAFA" stroke="black" stroke-width="9"/>
      <g className='paths'>      
      <path className='path-check-one' d="M22.3717 70.4708C27.2459 79.7566 35.72 87.547 42.465 95.5509C43.4695 96.7429 46.3277 101.287 48.1698 101.513C49.9017 101.725 53.778 92.6883 54.0755 92.1629C67.5555 68.357 86.4981 46.4896 109.214 31.038C120.361 23.4555 132.334 14.7314 146.16 14.1368" stroke="#019E23" stroke-width="12" stroke-linecap="round"/>
      </g>
      <rect className='rect-four' x="4.5" y="403.5" width="96.8975" height="92" rx="9.5" fill="#FAFAFA" stroke="black" stroke-width="9"/>
      <g className='paths'>      
      <path className='path-check-tree' d="M22.3561 439.471C27.2246 448.757 35.6889 456.547 42.426 464.551C43.4293 465.743 46.2842 470.287 48.1242 470.513C49.854 470.725 53.7258 461.688 54.023 461.163C67.4873 437.357 86.4078 415.49 109.097 400.038C120.231 392.456 132.19 383.731 146 383.137" stroke="#019E23" stroke-width="12" stroke-linecap="round" />
      </g>
      
      <g className='paths'>
      <path className='path-check-two' d="M22.3717 192.471C27.2459 201.757 35.72 209.547 42.465 217.551C43.4695 218.743 46.3277 223.287 48.1698 223.513C49.9017 223.725 53.778 214.688 54.0755 214.163C67.5555 190.357 86.4981 168.49 109.214 153.038C120.361 145.456 132.334 136.731 146.16 136.137" stroke="#019E23" stroke-width="12" stroke-linecap="round" />
      </g>
        <rect className='rect-two' x="4.5" y="156.5" width="97" height="92" rx="9.5" fill="#FAFAFA" stroke="black" stroke-width="9" />
      <g className='paths'>
      <path className='path-check-two' d="M22.3717 192.471C27.2459 201.757 35.72 209.547 42.465 217.551C43.4695 218.743 46.3277 223.287 48.1698 223.513C49.9017 223.725 53.778 214.688 54.0755 214.163C67.5555 190.357 86.4981 168.49 109.214 153.038C120.361 145.456 132.334 136.731 146.16 136.137" stroke="#019E23" stroke-width="12" stroke-linecap="round"/>
      </g>
    </svg>
  )

  

  return (
    <div className='home'>
      <div className='headerHomePage'>
        <div className='titleAndResume'>
          {titleHomePage}
          {resumeHomePage}
        </div>
      </div>
      <div className='bodyHomePage'>
        <section className='leftSection'>
          <div>
            {svgCheckAnimation}            
          </div>
          <img
            className='imgAvatar'
            src={imgAvatar}
          />
        </section>
        <section className='rightSection'>        
          <div>
            <p className='ps'>{svgCheck} Usabilidade intuitiva </p>
            <p className='ps'>{svgCheck} Simples e eficiente </p>
            <p className='ps'>{svgCheck} Navegação dinâmica </p>
            <p className='ps'>{svgCheck} Ferramenta organizada </p>
            <p className='ps'>{svgX} Flags personalizadas </p>
            <p className='ps'>{svgX} Expiração por prazo </p>
            <p className='ps'>{svgX} Mobile </p>
          </div>
          <div className='btnsHomePage'>
            {inviteHomePage}
            <div>
              {btnRegister}  
              {btnLogin}
            </div>
          </div>
        </section>'
      </div> 
    </div>
  )
}
