module.exports = () => {
    process.on('uncaughtException', (ex) => {
        console.log(ex.message)
    })
    process.on('unhandledRejection', (ex) => {
        console.log(ex.message)
    })
}
