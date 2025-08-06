
export default function TechItem({item, desc, web}){

    return(
        <article className="tech-entry">
            <div className="img-div">
                <img  className="img-icon" src={item} alt="tech img"/>

            </div>
            
            <div> 
                <a href={web} target="_blank" >View official website</a>
              <p>{desc}</p>
            </div>
        </article>
    )
     
}