import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mamta Sharma",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Ishaan",
      title: "Co-Founder of DELKA",
      img:
      "assests/IMG20220811171138.jpg",
      icon: "assests/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Rajesh Sharma",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assests/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p)=>(

       
        <div className={p.featured? "card featured":"card"}>
          <div className="top">
            <img src="assests/right-arrow.png" className="left" alt="" />

            <img src={p.img}  className ="user"valt="" />
            <img  className="right" src={p.icon} alt="" />
          </div>
          <div className="center">
            {p.desc}
           
          </div>
          <div className="bottom">
            <h3>{p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
         ))}
      </div>
    </div>
  )
}
