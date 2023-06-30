function listgroup()
{
    const items =[
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
return (
<ol className="list-group list-group-numbered">
    {items.map(item=><li className="list-group-item">{item}</li>)}
</ol>
);
}

export default listgroup;