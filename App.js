import logo from './logo.svg';
// import useState so img's and likes render
import {useState} from 'react'
// img's to be imported and rendered in this project below.
import bible from '../src/component/bible.jpg'
import years from '../src/component/fiveyears.jpg'
import enders from '../src/component/endersgame.jpg'
import atomic from '../src/component/atomichabits.jpg'
import redwhite from '../src/component/redwhite.jpg'
import readpeople from '../src/component/readpeople.jpg'
import self from '../src/component/self.jpg'
import world from '../src/component/world.jpg'
// imported App.css below 
import './App.css';

// Declared App constant to be rendered and returned to display on screen
const App = () => {
  // declared const for like button clicks set to state to be rendered for each button click incrementing +1
  const [likes, setLikes] = useState(0)
// console logged likes button clicks
  {console.log([likes])}

  return (
    // div created to contain all img's, buttons and onClick events
    <div className="container">

{/* img one */}
      <h2>Like this photo!</h2>
      <img src={bible} alt='Bible'></img>
      <p>The Bible is the holy scripture of the Christian religion, 
      purporting to tell the history of the Earth from its earliest
       creation to the spread of Christianity in the first century A.D. 
       Both the Old Testament and the New Testament have undergone changes 
       over the centuries, including the the publication of the King</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img two */}
      <h2>Like this photo!</h2>
      <img src={years} alt='Five Years'></img>
      <p>In Five Years is a striking, moving love story about Dannie Kohan,
       a high-powered corporate lawyer who has everything planned out. The story 
       opens on the day she interviews for her dream job, nails it, and gets engaged 
       to her longtime boyfriend—all according to her five-year plan</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img 3 */}
      <h2>Like this photo!</h2>
      <img src={enders} alt='Enders Game'></img>
      <p>The novel tells the story of a young boy, Ender Wiggin, who is sent to a 
      training academy named Battle School, located in orbit above the Earth, built to 
      train people to become soldiers that will one day battle against a vast alien race 
      known as 'Buggers'.</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img 4 */}
      <h2>Like this photo!</h2>
      <img src={atomic} alt='Atomic Habits'></img>
      <p>An atomic habit is a regular practice or routine that is not only small and easy
       to do but is also the source of incredible power; a component of the system of compound 
       growth. Bad habits repeat themselves again and again not because you don't want to change, 
       but because you have the wrong system for change</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img 5 */}
      <h2>Like this photo!</h2>
      <img src={redwhite} alt='Red, White & Royal Blue'></img>
      <p>Red, White & Royal Blue is a 2019 LGBT romance novel by Casey McQuiston. The novel centres 
      around the character of Alex Claremont-Diaz, the First Son of the United States, and his romantic 
      relationship with Prince Henry, a British prince.</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img 6 */}
      <h2>Like this photo!</h2>
      <img src={readpeople} alt='Read People Like Book'></img>
      <p>Read People Like a Book isn't a normal book on body language of facial expressions. Yes, it 
      includes all of those things, as well as new techniques on how to truly detect lies in your everyday 
      life, but this book is more about understanding human psychology and nature.</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img 7 */}
      <h2>Like this photo!</h2>
      <img src={self} alt='Self Discipline'></img>
      <p>Self -Discipline: How To Build Mental Toughness And Focus To Achieve Your GoalsIf you are reading 
      these words right now then it means you are not comfortable with your current life situation. Maybe you 
      feel stuck or feel like you are not in control of your life?</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
{/* img 8 */}
      <h2>Like this photo!</h2>
      <img src={world} alt='World In Between'></img>
      <p>An action-packed page-turner with heart about a kid doing his best during difficult times, 
      World in Between celebrates the power of community and resilience, hope and kindness. Book recommendations, 
      author interviews, editors' picks, and more.</p>
      <p>Amount of Likes:{likes} </p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>

    </div>


  );
}
// export constant to render on REACT terminal on cmd line. NOTE: npm start
export default App;
