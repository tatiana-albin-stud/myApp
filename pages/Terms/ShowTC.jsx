import React from "react";
import styles from "./Stilizare.module.scss";
import { useState } from "react";
import { UtilityButton } from "lib/components/Buttons/buttons";

const ShowTC = (item) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const [events, setEvents] = useState([
    
    {
      description: "Continut",
      subtitle: "Cititi cu atentie termenii si conditii date",
      title: "Termeni si conditii",
    }
  ]);
 

  return (
    <div id="item" className={styles.containter}>
      {events.map((item) => {
        return (
          <>
            <div className={styles.box}>
              <h2>{item.title}</h2>
              <h3>{item.subtitle}</h3>
              
              <UtilityButton id="expand_button" onClick={() => setIsExpanded1(!isExpanded1)}>
                Afiseaza continut
              </UtilityButton>
              {/* <div visibility:${(isExpanded==true) ? "visible" : "hidden"}  > */}
        <div>
        { isExpanded1 &&<div >
            <div id="afisContinut" className="content">
                <p id="continut">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
            </p></div>
        </div>}
    </div>
              
            </div>
            <div className={styles.box}>
              <h2>Politica cookies</h2>
              <h3>Detalii despre cookie-uri folosite</h3>
              
              <UtilityButton id="expand_button" onClick={() => setIsExpanded2(!isExpanded2)}>
                Afiseaza continut
              </UtilityButton>
              {/* <div visibility:${(isExpanded==true) ? "visible" : "hidden"}  > */}
        <div>
        { isExpanded2 &&<div >
            <div id="afisContinut" className="content">
                <p id="continut">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
            </p></div>
        </div>}
    </div>
              
            </div>
            <div className={styles.box}>
              <h2>Informatii suplimentare</h2>
              <h3> </h3>
              
              <UtilityButton id="expand_button" onClick={() => setIsExpanded3(!isExpanded3)}>
                Afiseaza continut
              </UtilityButton>
              {/* <div visibility:${(isExpanded==true) ? "visible" : "hidden"}  > */}
        <div>
        { isExpanded3 &&<div >
            <div id="afisContinut">
                <p id="continut">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit dolorem quia beatae sunt blanditiis distinctio possimus, delectus commodi a maxime non vero tempore magnam illum error temporibus illo! Tempore.
            </p></div>
        </div>}
    </div>
              
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ShowTC;
