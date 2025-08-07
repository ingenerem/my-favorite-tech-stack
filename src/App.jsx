
import Header from './components/Header'
import TechItem from './components/TechItem'
import skillData from './data/skillData.json'

function App() {

  //const skills = skillData;
  const skills = skillData.map(skill=> <TechItem item={skill.logo}
                 desc={skill.description} web={skill.link} name={skill.name}/>)

  return (
    <>
    <Header/>
    <section className='skill-container'>
      {skills}
    </section>
   
    </>
   
  )
}

export default App
