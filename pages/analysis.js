import style from "../styles/Home.module.css"
import Link from "next/link"

export default function analysis() {
  return (
    <>
    <section className={style.subheader}>
    <div className={style.textBox}>
      <h1>Analysis</h1>
      
    </div>
   
  </section>
  <div className={style.text}> 
  <h1>Analysis</h1>
  <p>Now that we have all of our data and our graphs we can start conducting an analysis of our findings. Based on the data we collected a majority of them came from students (79.5%) from ages 13 - 17 (65.4%). The dataset had a couple of outliers which were removed in the charts and analysis of the data for a more accurate result. The first thing we noticed right away was that the numbers of sleep per age group collected did not correlate with the recommended amount of sleep each group should be getting, especially for younger children. This could be a result of students underestimating the number of hours of sleep they get or it might expose a problem that should be looked further into. Despite this, most students stated that they had no problem sleeping (58.5%) which could tell us that people are simply sleeping late. We did manage to find a slight correlation between the hours spent on social media and the hours sleeping. Based on our data the more hours spent on social media the less sleep you get. As we saw students who spent less than 3.5 hours on social media tend to sleep around 8 - 10 hours. When doing this study we were mainly focusing on the effects of social media on your sleep, but we seem to have found another interesting factor that might lead to a lack of sleep. That is the use of screens before sleep. As we can see in our charts above 70% of people are on their devices before sleeping. Blue light has been shown to affect your circadian rhythm and is highly associated with poor sleep. This could explain the lack of sleep among younger children. A majority of the younger kids reported using electronics before sleep. Many students reported using screens for work and social media purposes. Based on this we can infer that most people stay up too late because they are up working or on social media. In general, our research shows that people get an average of 7 hours of sleep per day, however, our data is skewed and so using the 5-number summary will give us a better idea of the results. Based on the 5-number summary most people sleep around 7 hours. </p>
  <p><Link   href="/more"><a style={{color:"blue", textDecoration:"underline"}}>Continue to More</a></Link></p>
  </div>
  </>

  )
}
