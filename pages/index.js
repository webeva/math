import Head from "next/head"
import style from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
   <>
      <Head>
        <title>ASI Research</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <section className={style.header}>
        <div className={style.textBox}>
          <h1>Math Project</h1>
          <p>Research project based on the relationship between sleep deprivation and the hours spent on social media. </p>
          <Link  href="/research"><a className={style.hero}>Learn More</a></Link>
        </div>
       
      </section>
      <div className={style.text}>
     
      <h1>Introduction</h1>
      <p>For this project, we will be trying to identify a correlation between sleep deprivation and the number of hours spent on social media per day. In order to collect our data, we decided to create a google form and share it with a random sample of students, teachers, parents, and more. Our total population was ASI, of course, we couldn’t expect everybody in ASI to fill out the form and so we ended up getting a random sample out of the population. In the end, we got a total of 78 responses from a wide variety of people in ASI which should give us a good representation of the total population. In order to avoid any biases, we made sure that names and data would not be shared with others so that personal biases would not affect our results. The link to the form can be found at <a style={{color:"blue", textDecoration:"underline"}} href="https://forms.gle/Ncc9DFMzeKLjj8NfA">https://forms.gle/Ncc9DFMzeKLjj8NfA</a>. We also make sure to exclude outliers from our calculations as they might result in a misinterpretation of our data. The formula used to calculate outliers can be found below. </p>
      <h2>
          X &gt; Q3 + 1.5IQR or <br></br>
					X &gt; Q1 - 1.5IQR
      </h2>
      <p>Based on our research we were able to form a hypothesis. Our hypothesis predicts that the more hours spent on social media the less sleep somebody gets. Our sample collected is represented in these charts: </p>
      <img src="./1.png"></img>
      <img src="./2.png"></img>
      <p>As you can see the majority of our data was collected from students, which is expected as there is a larger amount of students than teachers in ASI. The question we asked on our form can be found below: 
</p>
      <ul>
        <li>1) How many hours of sleep do you get on average?</li>
        <li>2) How many hours do you spend on social media on average per day?</li>
        <li>3) How would you classify yourself?
          <li>Kid (5 - 12)</li>
          <li>Teenagers (13 - 17)</li>
          <li>Young Adult (18 - 35)</li>
          <li>Middle Age (36 - 60)</li>
          <li>Elderly (60+)</li>
        </li>
        <li>4) How would you describe yourself?
          <li>Student</li>
          <li>Working</li>
          <li>Rather not say</li>
          <li>Other</li>
         
        </li>
        <li>5) Do you have problems sleeping?</li>
<li>6) Are you on your device right before sleeping?</li>
<li>7) How many hours of free time do you have per day?</li>
<li>8) Any other factors that might bias the results?</li>

      </ul>
      <p><Link href="/research" style={{color:"blue", textDecoration:"underline"}}><a>Continue to the research</a></Link></p>
      </div>
      
      

      

    </>
  )
}
