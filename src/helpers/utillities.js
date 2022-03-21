
function titleCase(name) {
    if (name){
        return  name[0].toUpperCase() + name.substring(1)
    }
}

export { titleCase }