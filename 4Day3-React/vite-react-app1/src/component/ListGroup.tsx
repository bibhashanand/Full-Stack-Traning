function listgroup()
{
    let items =[
        'Delhi',
        'Noida',
        'Ghaziabad',
        'Banglore',
        'Mumbai',
        'Patna',
        'Haryana',
        'Pune',
        'Prayagraj',
        'Bhuvneshwar'
    ];

    items = [];

    // if (items.length === 0) // === is strict comparasion which compare values as well as data type
    //     return (
    //     <>
    //     <h5>List</h5>
    //     <p>No item found</p>
    //     </>
    //     );
        

    return (
        <>
        <h5>List</h5>
        { items.length == 0 ? <p>No items found</p> : null}
        <ol className="list-group list-group-numbered">
            {items.map(item=> (
                 <li className="list-group-item" key={item}>{item}</li>
                ))}
        </ol>
        </>
        );
}

export default listgroup;