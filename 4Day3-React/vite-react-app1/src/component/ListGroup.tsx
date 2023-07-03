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

    //items = [];

    if (items.length === 0) // === is strict comparasion which compare values as well as data type
        return <p>No item found</p>;
        

return (
<ol className="list-group list-group-numbered">
    {items.map(item=> (
    <li className="list-group-item" key={item}>{item}</li>
    ))}
</ol>
);
}

export default listgroup;