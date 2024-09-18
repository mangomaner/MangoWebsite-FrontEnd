import homestyle from "@/pages/test/css/homestyle.css";

const Mycard = ({title, info, msg}) =>{
  return (
    <div className={homestyle.part1}>
      <div className={homestyle.pt}>
        <div className={homestyle.imghid}>
          <div className={homestyle.img}></div>
        </div>
        <div className={homestyle.txt}>
          <h1>{title}</h1>
          <p>&emsp;&emsp;{info}</p>
          <p>&emsp;&emsp;{msg}</p>
        </div>
      </div>
    </div>
  )
}
export default Mycard;
