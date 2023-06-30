function Message()
{   const name='Bibhash Anand';
    if(name)
    return <h1>Hello {name} </h1>;
    else
    return <h2>Hello World! it's React, build using Vite</h2>;
}
export default Message;