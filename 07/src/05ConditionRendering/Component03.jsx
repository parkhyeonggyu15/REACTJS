

const Component03 = ({ items }) => {
    console.log('items', items);
    // console.log('length',items.length);

    //01
    // return (
    //     <ul>
    //         {items && items.map((item,idx)=>{
    //             console.log('item',item);
    //             return (
    //                 <li key={idx}>{item}</li>
    //             );
    //         })}
    //     </ul>
    // )
    //02
    return (
        <ul>
            {items && items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    )

}

export default Component03;
