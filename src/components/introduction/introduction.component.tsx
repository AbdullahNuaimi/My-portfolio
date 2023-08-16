import { useState } from "react";
import "./introduction.css";

const Introduction = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="introContainer">
      <div className="introTitle">
        <h1>Hello I'm Abdullah</h1>
        <h1>I'm a <h1 style={{color: "#FFC300", display: 'inline'}}>Web</h1> developer</h1>
      </div>
      <p>
        in the ancient city of Bethlehem, I came into this world in the year
        2000. Even as a child, I found myself drawn to the mesmerizing glow of
        the computer screen. It became my gateway to a world of games and
        endless possibilities on the vast expanse of the internet. As I delved
        deeper into this digital realm, my curiosity piqued. I couldn't help
        {!showMore && (
          <button
            type="button"
            onClick={() => {
              setShowMore(true);
            }}
          >
            &nbsp;Read more..
          </button>
        )}
          <p className={showMore?'showText':'hideText'}>
            but wonder about the inner workings of these magical machines and
            the intricate software that powered them. This fascination with
            computers and software was instilled in me from my earliest days,
            shaping my passion for coding. As I grew older, my skills in web
            development began to take shape. With each passing day, I gained
            more experience, honing my abilities in crafting websites and online
            applications. The virtual world became my canvas, and coding became
            the paintbrush through which I could bring ideas to life. Now, armed
            with a year of practical experience in web development, I eagerly
            anticipate what lies ahead. I yearn to expand my knowledge, broaden
            my horizons, and tackle real-world challenges through innovative
            solutions. The dream of creating tangible impact beckons, and I am
            determined to grow and make a difference in this ever-evolving
            digital landscape.
            <button
              type="button"
              onClick={() => {
                setShowMore(false);
              }}
            >
              &nbsp;Read less..
            </button>
          </p>
      </p>
    </div>
  );
};

export default Introduction;
