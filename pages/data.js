import style from "../styles/Home.module.css"

export default function data() {
  return (
    <>
    <section className={style.subheader}>
    <div className={style.textBox}>
      <h1>Data</h1>

      
    </div>
     
  </section>
  <div className={style.text}>
 <div className={style.texti}>
 <img src="./M1.png"/>
  <img src="./M2.png"/>
  <img src="./M3.png"/>
  <img src="./M4.png"/>
  <img src="./M5.png"/>
  <img src="./M6.png"/>
  <img src="./M7.png"/>
  <img src="./M8.png"/>
  <img src="./M9.png"/>
 </div>
 <p>If we plot this data with the outliers we would see this: 
</p>
<img className={style.textx} src="./3.png"></img>
<p>This can either mean that we have discovered a species that can sleep 25 hours per day or this is just a mistake or somebody trolling us. Anyway, we remove it to get a better understanding of the data we have collected. If we remove the outliers from our data we get this as our result. This graph is a better representation of our data and can help us conduct further studies. Some additional graphs that might be useful are shown below:
</p>
<img className={style.textx} src="./4.png"></img>
<img className={style.textx} src="./5.png"></img>
<img className={style.textx} src="./6.png"></img>
<img className={style.textx} src="./7.png"></img>
<img className={style.textx} src="./8.png"></img>
<p><a href="/analysis" style={{color:"blue", textDecoration:"underline"}}>Continue to the analysis</a></p>
  </div>
  </>
  )
}
