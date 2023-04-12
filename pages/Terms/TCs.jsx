import  TC  from "./TC";

const TCs = ({ items }) => {
    return (
    //     <div id="item" className={styles.containter}>
    //   {events.map((item) => {
    //     return (
    //       <>
    //         <div className={styles.box}>
    //           <h2>{item.title}</h2>
    //           <h3>{item.subtitle}</h3>
    //           <UtilityButton onClick={() => setOpenAdd(true)}>
    //             Afiseaza continut
    //           </UtilityButton>
    //         </div>
    //       </>
    //     );
    //   })}
    // </div>

        <ul className="tc-list">
            {items.map((item) => (
                <li key={item.id}>
                    <TC {...item} />
                </li>
            ))}
        </ul>
    );
}

export default TCs;