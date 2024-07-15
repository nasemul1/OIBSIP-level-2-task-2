import './App.css'
import image from './assets/download.png';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';

function App() {
  return (
    <>
      <div id='s123'>
        <img src={image} alt="image" />
      </div>

      <div id="s234">
        <div id='s234-1'>
          <h3>His life on earth</h3>
          <p>Jamal Nazrul Islam FRAS (24 February 1939 – 16 March 2013) was a Bangladeshi mathematical physicist and cosmologist.[1] He was a professor at University of Chittagong, served as a member of the advisory board at Shahjalal University of Science and Technology and member of the syndicate at Chittagong University of Engineering & Technology until his death.[2] He also served as the director of the Research Center for Mathematical and Physical Sciences (RCMPS) at the University of Chittagong. He was awarded Ekushey Padak in 2000 by the Government of Bangladesh.[3] </p>
        </div>
        <div id='s234-2'>
          <p>"He is one of the most distinguished scientists to have come from the developing world, and his contributions to the field of theoretical physics and cosmology are widely recognized."</p>
          <p>- Stephen Hawking</p>
        </div>
      </div>

      <div id="s345">
        <div id='s345-1'>
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          <img src={image}/>
        </div>
        <div id='s345-2'>
          <h3>Awards:</h3>
          <ul>
            <li>Gold award from Bangladesh Academy of Sciences (Senior group; 1985)</li>
            <li>Medal Lecture award from Accademia Nazionale delle Scienze (1998)</li>
            <li>Bangladesh National Award for Science and Technology (1998)</li>
            <li>Ekushey Padak (2000)</li>
            <li>Razzak-Shamsun Lifetime Achievement Award in Physics from the University of Dhaka (2011)</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
