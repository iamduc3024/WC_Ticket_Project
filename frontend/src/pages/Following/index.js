function Following() {

    let x = 1
    setTimeout(() => {
        x = 2
    }, 2000)
    console.log(x);
    return <h2>Following page</h2>;
}

export default Following;