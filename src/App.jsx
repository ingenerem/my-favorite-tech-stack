
import Header from './components/Header'
import TechItem from './components/TechItem'
import skillData from './data/skillData.json'

function App() {

  const skills = skillData;

  return (
    <>
    <Header/>
    <section className='skill-container'>
      {skills.map((skill, index) => (

        
               <TechItem
                 key={index}        
                 item={skill.logo}
                 desc={skill.description}
                 web={skill.link}
                 name={skill.name}
              />
      ))}



      
    </section>
   
    </>
   
  )
}

export default App
