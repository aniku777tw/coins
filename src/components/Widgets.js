import React from "react";
import "../css/Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      

      <div className="iframe">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffqyuntech20NYUST%2F%3Fref%3Dpage_internal&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="100%"
          height="380"
          scrolling="yes"
          frameBorder="0"
          allowFullScreen={true}
          title="Facebook plugin"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="label">
        <label> ヽ(●´∀`●)ﾉ (」・ω・)」 my new songs ! ヽ(●´∀`●)ﾉ (」・ω・)」</label>
      </div>
      <div className="iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CLxnxzO8d6Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/j-XE-VuPuQo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>



    </div>
  );
}

export default Widgets;
